import { gql } from "@apollo/client";

export const CREATE_CATALOGUE = gql`
  mutation createCatalogue(
    $title: String!
    $filePath: String!
    $fileOriginName: String!
  ) {
    createCatalogue(
      title: $title
      filePath: $filePath
      fileOriginName: $fileOriginName
    )
  }
`;

export const GET_ALL_CATALOGUE = gql`
  query getAllCatalogue {
    getAllCatalogue {
      _id
      title
      filePath
      fileOriginName
    }
  }
`;

export const UPDATE_CATALOGUE = gql`
  mutation updateCatalogue(
    $id: String!
    $title: String!
    $filePath: String!
    $fileOriginName: String!
  ) {
    updateCatalogue(
      id: $id
      title: $title
      filePath: $filePath
      fileOriginName: $fileOriginName
    )
  }
`;

export const DELETE_CATALOGUE = gql`
  mutation deleteCatalogue($id: String!) {
    deleteCatalogue(id: $id)
  }
`;
