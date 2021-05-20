const { AuthenticationError } = require("apollo-server-express");
const { Admin, Events, Gallery, Tags } = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const path = require("path");
const { createWriteStream, unlink } = require("fs");
const { GraphQLUpload } = require("graphql-upload");

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    tag: async () => {
      return await Tags.find();
    },
    galleries: async (parent, { tag, title }) => {
      const params = {};

      if (tag) {
        params.tag = tag;
      }

      if (title) {
        params.title = {
          $regex: title,
        };
      }

      return await Gallery.find(params).populate("tag");
    },
    gallery: async (parent, { _id }) => {
      return await Gallery.findById(_id).populate("tag");
    },
    events: async (parent, { title }) => {
      const params = {};

      if (title) {
        params.title = {
          $regex: title,
        };
      }

      return await Events.find(params);
    },
    event: async (parent, { _id }) => {
      return await Events.findById(_id);
    },
    admin: async (parent, args, context) => {
      if (context.admin) {
        const admin = await Admin.findById(context.admin._id)
          .populate("gallery")
          .populate("events")
          .populate("tag");

        admin.events.sort((a, b) => b.Date - a.Date);

        return admin;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addAdmin: async (parent, args) => {
      console.log(args)
      const admin = await Admin.create(args);
      const token = signToken(admin);

      return { token, admin };
    },

    addGallery: async (_, args, context) => {
      if (context.admin) {
        let { image, input } = args;

        const { createReadStream, filename } = await image;
        // reads what is coming in from front end
        await new Promise((res) => {
          createReadStream()
            .pipe(
              // creates folder with image in it
              createWriteStream(path.join(__dirname, "../../images", filename))
            )
            .on("close", res);
        });
        // upload image to cloudinary using cloudinary uploader
        const upload = await cloudinary.uploader.upload(
          `../images/${filename}`,
          (error, result) => {
            if (error) console.error(error);
            return result;
          }
        );

        console.log(upload);

        input.link = upload.url;
        input.imageId = upload.public_id;

        const gallery = await Gallery.create(
          {
            ...input,
          }
          // {new: true}
        );

        const removeFile = await unlink(
          path.join(__dirname, "../../images", filename),
          (err) => {
            if (err) console.error(err);
            return;
          }
        );

        // await Admin.create(args);
        return gallery;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    addEvents: async (_, args, context) => {
      if (context.admin) {
        const event = await Events.create({
          ...args,
          email: context.admin.email,
        });
        // await Admin.create(args);
        return event;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    addTags: async (_, args, context) => {
      if (context.admin) {
        const tag = await Tags.create({
          ...args,
          email: context.admin.email,
        });
        // await Admin.create(args);
        return tag;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    // addGalleryTag: async (_, args, context) => {
    //   console.log(args)
      // if (context.admin) {

      //   const updatedGallery = await Gallery.updateOne({
      //     { _id: gallery._id }
      //   })
    // },

    updateGallery: async (_, args, context) => {
      if (context.admin) {
        const updatedGallery = await Gallery.findByIdAndUpdate(
          { _id: args._id },
          {
            $set: { ...args },
          },
          { new: true }
        );
        return updatedGallery;
      }
      throw new AuthenticationError("You need to be an admin!");
    },

    updateEvents: async (_, args, context) => {
      if (context.admin) {
        const updatedEvent = await Events.findByIdAndUpdate(
          { _id: args._id },
          {
            $set: { ...args },
          },
          { new: true }
        );
        return updatedEvent;
      }
      throw new AuthenticationError("You need to be an admin!");
    },

    updateTags: async (_, args, context) => {
      if (context.admin) {
        const updatedTag = await Tags.findByIdAndUpdate(
          { _id: args._id },
          {
            $set: { ...args },
          },
          { new: true }
        );
        return updatedTag;
      }
      throw new AuthenticationError("You need to be an admin!");
    },

    updateAdmin: async (parent, args, context) => {
      if (context.admin) {
        return await Admin.findByIdAndUpdate(context.admin._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    deleteGallery: async (_, args, context) => {
      if (context.admin) {
        const deletedGallery = await Gallery.findByIdAndDelete({
          _id: args._id,
        });
        return deletedGallery;
      }
      throw new AuthenticationError("You need to be an admin!");
    },

    deleteEvents: async (_, args, context) => {
      if (context.admin) {
        const deletedEvent = await Events.findByIdAndDelete({ _id: args._id });
        return deletedEvent;
      }
      throw new AuthenticationError("You need to be an admin!");
    },

    deleteTags: async (_, args, context) => {
      if (context.admin) {
        const deletedTag = await Tags.findByIdAndDelete({ _id: args._id });
        return deletedTag;
      }
      throw new AuthenticationError("You need to be an admin!");
    },

    login: async (parent, { email, password }) => {
      console.log(email, password)
      const admin = await Admin.findOne({ email });

      if (!admin) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await admin.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(admin);

      return { token, admin };
    },
  },
};

module.exports = resolvers;
