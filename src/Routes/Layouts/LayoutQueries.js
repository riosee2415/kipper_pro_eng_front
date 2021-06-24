import { gql } from "@apollo/client";

export const GET_ALL_FOOTER_INFO = gql`
  query getAllFooterInfo {
    getAllFooterInfo {
      _id
      title
      content
    }
  }
`;

export const GET_ALL_SNS = gql`
  query getAllSns {
    getAllSns {
      _id
      url
    }
  }
`;

export const GET_THEME_LIST = gql`
  query getThemeList {
    getThemeList {
      _id
      title
      thumbnailPath
      sort
    }
  }
`;
