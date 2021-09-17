import { gql } from "@apollo/client";

export const GET_POPUP_ALL = gql`
  query getPopupAll {
    getPopupAll {
      _id
      title
      thumbnailPath
      onoff
    }
  }
`;
