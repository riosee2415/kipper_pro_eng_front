import { gql } from "@apollo/client";

export const GET_REFERENCE = gql`
  query getReferenceClient(
    $searchValue: String!
    $limit: Int!
    $currentPage: Int!
  ) {
    getReferenceClient(
      searchValue: $searchValue
      limit: $limit
      currentPage: $currentPage
    ) {
      _id
      title
      subTitle
      content
      thumbnailPath
      filePath
      fileOriginName
      link
    }
  }
`;

export const GET_REFERENCE_TOTALPAGE = gql`
  query getReferenceTotalPageClient($searchValue: String!, $limit: Int!) {
    getReferenceTotalPageClient(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_REFERENCE_TOTALPAGE_ONLY_CNT = gql`
  query getReferenceTotalPageOnlyCntClient($searchValue: String!) {
    getReferenceTotalPageOnlyCntClient(searchValue: $searchValue)
  }
`;

export const GET_CATALOGUE = gql`
  query getCatalogueClient(
    $searchValue: String!
    $limit: Int!
    $currentPage: Int!
  ) {
    getCatalogueClient(
      searchValue: $searchValue
      limit: $limit
      currentPage: $currentPage
    ) {
      _id
      title
      filePath
      fileOriginName
    }
  }
`;

export const GET_CATALOGUE_TOTALPAGE = gql`
  query getCatalogueTotalPageClient($searchValue: String!, $limit: Int!) {
    getCatalogueTotalPageClient(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_CATALOGUE_TOTALPAGE_ONLY_CNT = gql`
  query getCatalogueTotalPageOnlyCntClient($searchValue: String!) {
    getCatalogueTotalPageOnlyCntClient(searchValue: $searchValue)
  }
`;
