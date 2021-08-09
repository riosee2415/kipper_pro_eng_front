import { gql } from "@apollo/client";

export const GET_REFERENCE_ONE = gql`
  query getReferenceOne($id: String!) {
    getReferenceOne(id: $id) {
      _id
      title
      subTitle
      thumbnailPath
      filePath
      fileOriginName
      link
      isDelete
      content
    }
  }
`;

export const MODIFY_REFERENCE = gql`
  mutation modifyReference(
    $id: String!
    $title: String!
    $subTitle: String!
    $thumbnail: String!
    $filePath: String!
    $fileOriginName: String!
    $link: String!
    $content: String!
  ) {
    modifyReference(
      id: $id
      title: $title
      subTitle: $subTitle
      thumbnail: $thumbnail
      filePath: $filePath
      fileOriginName: $fileOriginName
      link: $link
      content: $content
    )
  }
`;
