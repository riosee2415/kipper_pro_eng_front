import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getProduct($searchName: String!, $searchType: String!) {
    getProduct(searchName: $searchName, searchType: $searchType) {
      _id
      colorImage {
        _id
        color
        colorCode
        imagePath
        sort
      }
      productType
      productSubType
      keyType
      mainTitle
      productName
      modelName
      size
      weight
      productIcon
      iconContent1
      productContent
      warningContent
      settingImage
      settingTitle
      settingContent
      pointTitle
      pointContent1
      pointContent2
      pointContent3
      featureImage1
      featureTitle1
      featureSubTitle1
      featureContent1
      featureImage2
      featureTitle2
      featureSubTitle2
      featureContent2
      specName
      specImage1
      specImage2
      specImage3
      specDetailTitle1
      specDetailContent1
      specDetailImage1
      specDetailTitle2
      specDetailContent2
      specDetailImage2
      specDetailTitle3
      specDetailContent3
      specDetailImage3
      finalTitle
      finalContent
      cerIconImage1
      cerIconImage2
      cerIconImage3
      cerIconImage4
      cerIconImage5
      cerIconImage6
      cerContent1
      cerContent2
      cerContent3
      cerContent4
      cerContent5
      cerContent6
      filePath1
      fileOriginName1
      filePath2
      fileOriginName2
      thumbnailPath
      thumbnailPath2
      createdAt
      isDelete
      deletedAt
      sort
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: String!) {
    deleteProduct(id: $id)
  }
`;

export const UPDATE_SORT = gql`
  mutation updateProductSort($id: String!, $sort: Int!) {
    updateProductSort(id: $id, sort: $sort)
  }
`;
