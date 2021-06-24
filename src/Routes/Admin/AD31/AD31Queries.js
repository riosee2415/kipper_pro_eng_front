import { gql } from "@apollo/client";

export const GET_ACEEPTRECORD = gql`
  query getAcceptRecord(
    $currentYear: String!
    $searchIp: String!
    $searchLocation: String!
    $searchDevice: String!
    $searchPlatform: String!
    $searchBrowser: String!
  ) {
    getAcceptRecord(
      currentYear: $currentYear
      searchIp: $searchIp
      searchLocation: $searchLocation
      searchDevice: $searchDevice
      searchPlatform: $searchPlatform
      searchBrowser: $searchBrowser
    ) {
      _id
      date
      browser
      platform
      device
      ipAdress
      title
      isVisit
    }
  }
`;

export const GET_ACEEPTRECORD_BY_MONTH = gql`
  query getAcceptRecordByMonth($currentMonth: String!) {
    getAcceptRecordByMonth(currentMonth: $currentMonth) {
      _id
      date
    }
  }
`;

export const GET_ACEEPTRECORD_BY_DATE = gql`
  query getAcceptRecordByDate($currentDate: String!) {
    getAcceptRecordByDate(currentDate: $currentDate) {
      _id
      date
    }
  }
`;
export const GET_ACEEPTRECORD_BY_YESTERDAY = gql`
  query getAcceptRecordByYesterday($currentYesterday: String!) {
    getAcceptRecordByYesterday(currentYesterday: $currentYesterday) {
      _id
      date
    }
  }
`;

export const GET_ACCEPTRECORD_ALL_YEAR = gql`
  query getAcceptRecordAllYear($year: String!) {
    getAcceptRecordAllYear(year: $year) {
      date
    }
  }
`;
