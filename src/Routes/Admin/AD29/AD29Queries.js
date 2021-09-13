import { gql } from "@apollo/client";

export const GET_POPUP = gql`
  query getPopup($searchName: String!) {
    getPopup(searchName: $searchName) {
      _id
      title
      thumbnailPath
      isDelete
      createdAt
      deletedAt
      updatedAt
      onoff
    }
  }
`;

export const DELETE_POPUP = gql`
  mutation deletePopup($id: String!) {
    deletePopup(id: $id)
  }
`;
