import { gql } from "@apollo/client";

export const REGISTER_EXHIBITION = gql`
  mutation registerExhibition(
    $title: String!
    $thumbnailPath: String!
    $innerImageList: [String]!
  ) {
    registerExhibition(
      title: $title
      thumbnailPath: $thumbnailPath
      innerImageList: $innerImageList
    )
  }
`;
