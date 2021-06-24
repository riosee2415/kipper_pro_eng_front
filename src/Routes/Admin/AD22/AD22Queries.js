import { gql } from "@apollo/client";

export const REGISTER_MAINBANNER = gql`
  mutation registerMainBanner(
    $title: String!
    $link: String!
    $thumbnailPath: String!
    $description: String!
  ) {
    registerMainBanner(
      title: $title
      link: $link
      thumbnailPath: $thumbnailPath
      description: $description
    )
  }
`;
