import { gql } from "@apollo/client";

export const REGISTER_POPUP = gql`
  mutation registerPopup($title: String!, $thumbnailPath: String!) {
    registerPopup(title: $title, thumbnailPath: $thumbnailPath)
  }
`;
