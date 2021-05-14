const { AuthenticationError } = require("apollo-server-express");
const { Admin, Events, Gallery } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
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

      return await Events.find(params).populate("title");
    },
    event: async (parent, { _id }) => {
      return await Events.findById(_id).populate("title");
    },
    admin: async (parent, args, context) => {
      if (context.admin) {
        const admin = await Admin.findById(context.admin._id)
          .populate("gallery")
          .populate("events")
          .populate("tag");

        //   user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        admin.events.sort((a, b) => b.eventDate - a.eventDate);
        // admin.galleries.sort((a, b) => b.eventDate - a.eventDate);

        return admin;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addAdmin: async (parent, args) => {
      const admin = await Admin.create(args);
      const token = signToken(admin);

      return { token, admin };
    },

    addGallery: async (_, args, context) => {
      if (context.admin) {
        const gallery = await Gallery.create({
          ...args,
          email: context.admin.email,
        });
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

        return event;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    addTags: async (_, args, context) => {
      if (context.admin) {
        const tag = await Tags.create({ ...args, email: context.admin.email });

        return tag;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    updateGallery: async (_, args, context) => {
      if (context.admin) {
        const originalGallery = await Gallery.findById(args._id).exec(); 
        console.log(originalGallery + "OG")

        const updatedGallery = await Gallery.findByIdAndUpdate(
          { _id: args._id },
          { $set: { title: args.title, description: args.description, image: args.image, link: args.link, size: args.size, price: args.price, availability: args.availability } },
          { new: true }
        );
          console.log(updatedGallery + "UG")
        if (!originalGallery) {
          throw new Error(`Couldn't find image with id`);
        }
        // if (updatedGallery.title == undefined) {
        //   updatedGallery.title = originalGallery.title; 
        // } 
        if (args.title == undefined) {
          updatedGallery.title = originalGallery.title;
        }
        // if (updatedGallery.description == undefined) {
        //   updatedGallery.description = originalGallery.description;
        // }
        if (args.description == undefined) {
          updatedGallery.description = originalGallery.description;
        }
        console.log(updatedGallery + "UG2")
        return updatedGallery;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    updateEvents: async (parent, args, context) => {
      if (context.admin) {
        const updatedAdmin = await Admin.findByIdAndUpdate(
          { _id: context.admin._id },
          { $addToSet: { events: event._id } },
          { new: true }
        );

        return updatedAdmin;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    updateTags: async (parent, args, context) => {
      if (context.admin) {
        const updatedAdmin = await Admin.findByIdAndUpdate(
          { _id: context.admin._id },
          { $addToSet: { tag: tag._id } },
          { new: true }
        );

        return updatedAdmin;
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

    deleteGallery: async (parent, args, context) => {
      if (context.admin) {
        const updatedAdmin = await Admin.findByIdAndUpdate(
          { _id: context.admin._id },
          { $pull: { gallery: { _id: args._id } } },
          { new: true }
        );

        return updatedAdmin;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    deleteEvents: async (parent, args, context) => {
      if (context.admin) {
        const updatedAdmin = await Admin.findByIdAndUpdate(
          { _id: context.admin._id },
          { $pull: { events: { _id: args._id } } },
          { new: true }
        );

        return updatedAdmin;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    deleteTags: async (parent, args, context) => {
      if (context.admin) {
        const updatedAdmin = await Admin.findByIdAndUpdate(
          { _id: context.admin._id },
          { $pull: { tag: { _id: args._id } } },
          { new: true }
        );

        return updatedAdmin;
      }

      throw new AuthenticationError("You need to be an admin!");
    },

    login: async (parent, { email, password }) => {
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
