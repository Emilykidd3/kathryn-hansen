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
  mutation addGallery($image: Upload, $input: Database) {
    addGallery(image: $image, input: $input) {
      image
      input {
        title
        description
        size
        price
        availability
        tag
      }
    }
  }
`;
export const UPDATE_GALLERY = gql`
  mutation updateGallery(
    $_id: ID!
    $title: String
    $description: String
    $link: String
    $size: String
    $price: String
    $availability: String
    $tag: String
  ) {
    updateGallery(
      _id: $_id
      title: $title
      description: $description
      link: $link
      size: $size
      price: $price
      availability: $availability
      tag: $tag
    ) {
      id
      title
      description
      link
      size
      price
      availability
      tag
      }
    }
  
`;

export const DELETE_GALLERY = gql`
  mutation deleteGallery($_id: ID) {
    deleteGallery(_id: $_id) {
      _id
      title
    }
  }
`;
export const DELETE_GALLERY = gql`
  mutation deleteGallery($_id: ID) {
    deleteGallery(_id: $_id) {
      _id
      title
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
export const UPDATE_EVENT = gql`
  mutation updateEvents(
    $_id: ID!
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
    updateEvents(
      _id: $_id
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
      id
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
export const DELETE_EVENT = gql`
  mutation deleteEvents($_id: ID!) {
    deleteEvents(_id: $_id) {
      _id
      title
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
export const UPDATE_TAGS = gql`
  mutation updateTags($_id: ID, $name: String) {
    updateTags(_id: $_id, name: $name) {
      _id
      name
    }
  }
`;
export const DELETE_TAGS = gql`
  mutation deleteTags($_id: ID) {
    deleteTags(_id: $_id) {
      _id
      name
    }
  }
`;
