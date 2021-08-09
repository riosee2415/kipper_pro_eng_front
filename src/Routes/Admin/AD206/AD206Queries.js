import { gql } from "@apollo/client";

export const GET_EXHIBITION = gql`
  query getExhibition($searchName: String!) {
    getExhibition(searchName: $searchName) {
      _id
      title
      thumbnailPath
      files {
        _id
        filePath
      }
      isDelete
    }
  }
`;

export const DELETE_EXHIBITION = gql`
  mutation deleteExhibition($id: String!) {
    deleteExhibition(id: $id)
  }
`;
