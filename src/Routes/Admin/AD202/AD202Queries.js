import { gql } from "@apollo/client";

export const GET_REFERENCE = gql`
  query getReference($searchName: String!) {
    getReference(searchName: $searchName) {
      _id
      title
      subTitle
      thumbnailPath
      filePath
      fileOriginName
      link
      content
      isDelete
    }
  }
`;

export const DELETE_REFERENCE = gql`
  mutation deleteReference($id: String!) {
    deleteReference(id: $id)
  }
`;
