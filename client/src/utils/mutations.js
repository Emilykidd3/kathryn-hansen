import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      admin {
        _id
      }
    }
  }
`;

export const ADD_ADMIN = gql`
  mutation addAdmin($email: String!, $password: String!) {
    addAdmin(email: $email, password: $password) {
      token
      admin {
        _id
      }
    }
  }
`;

export const ADD_GALLERY = gql`
  mutation addGallery($title: String, $image: String) {
    addGallery(title: $title, image: $image) {
      title
      description
      image
      link
      size
      price
      availability
    }
  }
`;
export const ADD_EVENT = gql`
  mutation addEvents(
    $title: String
    $date: String
    $startTime: String
    $endTime: String
  ) {
    addEvents(
      title: $title
      date: $date
      startTime: $startTime
      endTime: $endTime
    ) {
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
export const ADD_TAGS = gql`
  mutation addTags($name: String) {
    addTags(name: $name) {
      _id
      name
    }
  }
`;
