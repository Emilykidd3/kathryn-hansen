// need time scaler and update tags in Gallery

const { gql } = require("apollo-server-express");

// const { GraphQLScalarType, Kind } = require("graphql");
// const dateScalar = new GraphQLScalarType({
//   name: "Date",
//   description: "Date custom scalar type",
//   serialize(value) {
//     return value.getTime(); // Convert outgoing Date to integer for JSON
//   },
//   parseValue(value) {
//     return new Date(value); // Convert incoming integer to Date
//   },
//   parseLiteral(ast) {
//     if (ast.kind === Kind.INT) {
//       return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
//     }
//     return null; // Invalid hard-coded value (not an integer)
//   },
// });

// scaler Time
// scaler Date

const typeDefs = gql`

  type Tags {
    _id: ID
    name: String
  }

  type Gallery {
    _id: ID
    title: String
    description: String
    link: String
    imageId: String
    size: String
    price: Float
    availability: String
    tag: String
  }

  type Events {
    _id: ID
    title: String
    address: String
    city: String
    state: String
    zip: String
    date: String
    startTime: String
    endTime: String
    link: String
  }

  type Admin {
    _id: ID
    email: String
    gallery: [Gallery]
    events: [Events]
    tag: [Tags]
  }

  type Auth {
    token: ID
    admin: Admin
  }

  type Query {
    galleries: [Gallery]
    gallery(_id: ID!): Gallery
    events(title: String): [Events]
    event(_id: ID!): Events
    tag: [Tags]
    admin: Admin
  }

  type Test {
    title: String 
    description: String
    size: String
    price: String
    availability: String
    tag: String
  }

  input TestInput {
    title: String 
    description: String
    size: String
    price: String
    availability: String
    tag: String
  }

  input Database {
    title: String 
    description: String
    size: String
    price: Float
    availability: String
    tag: String
  }

  type Mutation {
    addAdmin(email: String!, password: String!): Auth
    updateAdmin(email: String, password: String): Admin
    addImage(
      input: Database
      image: Upload): Gallery
    updateGallery(
      _id: ID!
      title: String
      description: String
      image: String
      link: String
      size: String
      price: Float
      availability: String
      tag: String): Gallery
    deleteGallery(_id: ID!): Gallery
    addEvents(
      title: String
      address: String
      city: String
      state: String
      zip: String
      date: String
      startTime: String
      endTime: String
      link: String): Events
    updateEvents(
      _id: ID!
      title: String
      address: String
      city: String
      state: String
      zip: String
      date: String
      startTime: String
      endTime: String
      link: String): Events
    test(input: TestInput): Test
    deleteEvents(_id: ID!): Events
    addGalleryTag(_id: ID, title: String): Gallery
    addTags(name: String): Tags
    updateTags(_id: ID!, name: String): Tags
    deleteTags(_id: ID!): Tags
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// scaler Date

// scaler Time
