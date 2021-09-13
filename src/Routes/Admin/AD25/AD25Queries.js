import { gql } from "@apollo/client";

export const REGISTER_POPUP = gql`
  mutation registerPopup(
    $title: String!
    $thumbnailPath: String!
    $link: String!
  ) {
    registerPopup(title: $title, thumbnailPath: $thumbnailPath, link: $link)
  }
`;
