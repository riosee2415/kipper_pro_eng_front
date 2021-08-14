import { gql } from "@apollo/client";

export const GET_MAINBANNER_ALL = gql`
  query getMainBannerAll {
    getMainBannerAll {
      _id
      title
      thumbnailPath
      description
      link
    }
  }
`;

export const GET_MOBILEBANNER_ALL = gql`
  query getMobileMainBannerAll {
    getMobileMainBannerAll {
      _id
      title
      thumbnailPath
      description
      link
    }
  }
`;

export const ADD_ACCEPT_RECORD = gql`
  mutation addAcceptRecord(
    $date: String!
    $browser: String!
    $platform: String!
    $device: String!
    $ipAdress: String!
    $title: String!
    $isVisit: Boolean!
  ) {
    addAcceptRecord(
      date: $date
      browser: $browser
      platform: $platform
      device: $device
      ipAdress: $ipAdress
      title: $title
      isVisit: $isVisit
    )
  }
`;
