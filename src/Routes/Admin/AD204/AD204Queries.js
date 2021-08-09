import { gql } from "@apollo/client";

export const REGISTER_REFERENCE = gql`
  mutation registerReference(
    $title: String!
    $subTitle: String!
    $thumbnailPath: String!
    $filePath: String!
    $fileOriginName: String!
    $link: String!
    $content: String!
  ) {
    registerReference(
      title: $title
      subTitle: $subTitle
      thumbnailPath: $thumbnailPath
      filePath: $filePath
      fileOriginName: $fileOriginName
      link: $link
      content: $content
    )
  }
`;
