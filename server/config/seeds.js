const db = require("./connection");
const { Gallery, Tags, Admin } = require("../models");

db.once("open", async () => {
  // await Tags.deleteMany();

  // const tags = await Tags.insertMany([
  //   { name: "Pets" },
  //   { name: "Wild Animals" },
  //   { name: "Landscapes" },
  // ]);

  console.log("tags seeded");

  await Gallery.deleteMany();

  await Gallery.insertMany([
    {
      title: "The Fast and the Fuuurriest",
      description: "Colored Pencil on Paper",
      image: "the-fast-and-the-fuuurriest.jpg",
      link: null,
      tag: "Landscapes",
      size: "12x20",
      price: 2425,
      availability: "Available",
    },
    {
      title: "Up At The Quack of Dawn",
      description: "Colored Pencil on Paper",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185398/kathryn-hansen/up-at-the-quack-of-dawn_az0hws.jpg",
      link: null,
      tag: "Wildlife",
      size: "13x17.5",
      price: 2300,
      availability: "Available",
    },
    {
      title: "Tell Tail Sign",
      description: "Colored Pencil on Paper",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185398/kathryn-hansen/tell-tail-sign_yoa9m2.jpg",
      link: "https://fineartamerica.com/featured/tell-tail-sign-kathryn-hansen.html",
      tag: "Wildlife",
      size: "Original no longer for sale. Prints are available",
      price: null,
      availability: "Available",
    },
    {
      title: "A Kodiak Moment",
      description:
        "Colored Pencil on Paper. A shaggy haired bear I named Blu Berry has taken a pit stop from his busy morning of berry hunting. His favorites are blue and lingonberry but on occasion he does love to find a good huckleberry!",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/a-kodiak-moment_mqjiej.jpg",
      link: "https://fineartamerica.com/featured/a-kodiak-moment-kathryn-hansen.html",
      tag: "Wildlife",
      size: "Original no longer for sale. Prints are available.",
      price: null,
      availability: "Available",
    },
    {
      title: "Bearly Awake",
      description:
        "Colored Pencil on Paper. Scout is just hanging in there, taking a lazy afternoon snooze!",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/bearly-awake_baddgu.jpg",
      link: "https://fineartamerica.com/featured/bearly-awake-kathryn-hansen.html",
      tag: "Wildlife",
      size: "Original no longer for sale. Prints are available.",
      price: null,
      availability: "Available",
    },
    {
      title: "Owl By Myself",
      description:
        "Colored Pencil on Paper. Great Horned owl drawing from Southern California area.",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185398/kathryn-hansen/owl-by-myself_o4csiv.jpg",
      link: "https://fineartamerica.com/featured/owl-by-myself-kathryn-hansen.html",
      tag: "Wildlife",
      size: "Original no longer for sale. Prints are available.",
      price: null,
      availability: "Available",
    },
    {
      title: "Let It Bee",
      description:
        "Colored Pencil on Paper. This sweet bear was actually drawn as a 5 page tutorial for a colored pencil book called Draw Wildlife in Colored Pencil through Ann Kullberg publication.",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185397/kathryn-hansen/let-it-bee_ncy1il.jpg",
      link: "https://fineartamerica.com/featured/let-it-bee-kathryn-hansen.html",
      tag: "Wildlife",
      size: "Original no longer for sale. Prints are available.",
      price: null,
      availability: "Available",
    },
    {
      title: "I'm All Ears",
      description:
        "Colored Pencil on Paper. At our third camp in Kenya we landed at the Elephant Bedroom camp in Samburu. We were greeted by their resident elephant standing in the wide river munching away on the tall grasses. We were able to snap a few photos before the armed guards shooed us away for fear of us getting too close to a wild animal! ",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185394/kathryn-hansen/im-all-ears_n9vqip.jpg",
      link: "https://fineartamerica.com/featured/im-all-ears-kathryn-hansen.html",
      tag: "Wildlife",
      size: "Original no longer for sale. Prints are available.",
      price: null,
      availability: "Available",
    },
    {
      title: "Hiding in Plain Sight",
      description:
        "Colored Pencil on Paper. On our way up to the hiking trail behind my home, my dog Josie excitedly spotted this beautiful boy, who I named Bob Scratchit hiding in plain sight on a low lying pine tree branch. ",

      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/hiding-in-plain-sight_wwqcgl.jpg",
      link: "https://fineartamerica.com/featured/hiding-in-plain-sight-kathryn-hansen.html",
      tag: "Wildlife",
      size: "Original no longer for sale. Prints are available.",
      price: null,
      availability: "Available",
    },
    {
      title: "Winging It",
      description:
        "Colored Pencil on Paper. This beautiful kaleidoscope of Monarch butterflies are hanging up high on a eucalyptus branch. I saw them while on vacation in Pismo Beach, CA a few years ago.  ",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185399/kathryn-hansen/winging-it_xjasud.jpg",
      link: "https://fineartamerica.com/featured/winging-it-kathryn-hansen.html",
      tag: "Wildlife",
      size: "Original no longer for sale. Prints are available.",
      price: null,
      availability: "Available",
    },
    {
      title: "A Pair of Swimming Trunks",
      description: "Colored Pencil on Paper",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/a-pairoof-swimming-trunks_vks3oi.jpg",
      link: "https://annkullberg.com/products/elephant-in-depth-colored-pencil-tutorial",
      tag: "Wildlife",
      size: "11.75x17.5",
      price: 13.99,
      availability: "Available",
    },
    {
      // update this one
      title: "Gone Fishin'",
      description: "Colored Pencil on Paper",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185397/kathryn-hansen/gone-fishin_mhime1.jpg",
      link: null,
      tag: "Wildlife",
      size: "11.75x17.5",
      price: null,
      availability: "Available",
    },
    {
      // update this one
      title: "Cadbury",
      description: "Colored Pencil on Paper",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/cadbury_ahhz8v.jpg",
      link: null,
      tag: "Wildlife",
      size: "11.75x17.5",
      price: null,
      availability: "Available",
    },
    {
      // update this one
      title: "Chippy",
      description: "Colored Pencil on Paper",
      image: "https://res.cloudinary.com/dej8kpmbw/image/upload/v1621185395/kathryn-hansen/chippy_ivapfu.jpg",
      link: null,
      tag: "Landscape",
      size: "11.75x17.5",
      price: null,
      availability: "Available",
    },
  ]);

  console.log("gallery seeded");

  await Admin.deleteMany();

  await Admin.create({
    email: "katkdd@yahoo.com",
    password: "password",
  });

  console.log("Admin seeded");

  process.exit();
});
