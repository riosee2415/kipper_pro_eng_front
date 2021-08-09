import { gql } from "@apollo/client";

export const GET_EXHIBITION_ONE = gql`
  query getExhibitionOne($id: String!) {
    getExhibitionOne(id: $id) {
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

export const MODIFY_EXHIBITION = gql`
  mutation modifyExhibition(
    $id: String!
    $title: String!
    $thumbnail: String!
  ) {
    modifyExhibition(id: $id, title: $title, thumbnail: $thumbnail)
  }
`;
