import { gql } from "@apollo/client";

export const GET_PRODUCT_LIST_BY_TYPE = gql`
  query getProductListByType(
    $searchValue: String!
    $productType: String!
    $productSubType: String!
  ) {
    getProductListByType(
      searchValue: $searchValue
      productType: $productType
      productSubType: $productSubType
    ) {
      _id
      keyType
      mainTitle
      thumbnailPath
    }
  }
`;
