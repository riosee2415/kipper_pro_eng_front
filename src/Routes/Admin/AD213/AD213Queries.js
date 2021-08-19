import { gql } from "@apollo/client";

export const CREATE_LOCATION = gql`
  mutation createLocation($title: String!, $link: String!) {
    createLocation(title: $title, link: $link)
  }
`;

export const GET_ALL_LOCATION = gql`
  query getAllLocation {
    getAllLocation {
      _id
      title
      link
    }
  }
`;

export const UPDATE_LOCATION = gql`
  mutation updateLocation($id: String!, $title: String!, $link: String!) {
    updateLocation(id: $id, title: $title, link: $link)
  }
`;

export const DELETE_LOCATION = gql`
  mutation deleteLocation($id: String!) {
    deleteLocation(id: $id)
  }
`;
