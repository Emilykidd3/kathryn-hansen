import gql from "graphql-tag";

export const LOGIN = gql`
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
  mutation addGallery($input: Database, $image: Upload) {
    addGallery(input: $input, image: $image) {
      _id
      title
      description
      imageId
      link
      size
      price
      availability
      tag
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvents(
    $title: String
    $date: String
    $startTime: String
    $endTime: String
    $address: String
    $city: String
    $state: String
    $zip: String
    $link: String
  ) {
    addEvents(
      title: $title
      date: $date
      startTime: $startTime
      endTime: $endTime
      city: $city
      address: $address
      state: $state
      zip: $zip
      link: $link
    ) {
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
