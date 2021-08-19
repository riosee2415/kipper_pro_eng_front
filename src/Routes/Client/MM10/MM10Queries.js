import { gql } from "@apollo/client";

export const GET_SIGN_LIST = gql`
  query getSignList {
    getSignList {
      _id
      title
      thumbnail
      isDelete
      type
    }
  }
`;

export const GET_EXHIBITION_ALL = gql`
  query getExhibitionAll {
    getExhibitionAll {
      _id
      title
      thumbnailPath
      files {
        _id
        filePath
      }
    }
  }
`;

export const GET_ALL_LOCATION = gql`
  query getAllLocation {
    getAllLocation {
      _id
      title
      link
    }
  }
`;
