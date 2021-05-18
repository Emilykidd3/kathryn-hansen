import gql from "graphql-tag";

export const QUERY_ADMIN = gql`

  {
    admin {
      _id
      email
    }
      gallery {
        _id
        title
        description
        link
        imageId
        size
        price
        availability
        tag
      }
      events {
        _id
        title
        address
        city
        state
        zip
        date
        startTime
        endTime
        link
      }
      tag {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_GALLERY = gql`
  {
    gallery {
      _id
      title
      description
      link
      imageId
      size
      price
      availability
      tag
    }
  }
`;

// export const QUERY_TAG_GALLERY = gql`
//   query getGallery($tag: ID) {
//     gallery(tag: $tag) {
//       _id
//       title
//       description
//       image
//       link
//       size
//       price
//       availability
//       tag {
//         _id
//         name
//       }
//     }
//   }
// `;

export const QUERY_ONE_GALLERY = gql`
  query gallery($id: ID) {
    gallery(_id: $id) {
      _id
      title
      description
      link
      imageId
      size
      price
      availability
      tag
    }
  }
`;

export const QUERY_ALL_EVENTS = gql`
  {
    events {
      _id
      title
      address
      city
      state
      zip
      date
      startTime
      endTime
      link
    }
  }
`;

export const QUERY_EVENTS = gql`
  query getEvent($id: ID) {
    events(_id: $id) {
      _id
      title
      address
      city
      state
      zip
      date
      startTime
      endTime
      link
    }
  }
`;

export const QUERY_ALL_TAGS = gql`
  {
    tags {
      _id
      name
    }
  }
`;
