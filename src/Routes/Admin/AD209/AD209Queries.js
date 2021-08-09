import { gql } from "@apollo/client";

export const REGISTER_PRODUCT = gql`
  mutation registerProduct(
    $thumbnailPath: String!
    $thumbnailPath2: String!
    $colorImage: [String]!
    $productType: String!
    $productSubType: String!
    $keyType: String!
    $mainTitle: String!
    $productName: String!
    $modelName: String!
    $size: String!
    $weight: String!
    $productIcon: String!
    $iconContent1: String!
    $productContent: String!
    $warningContent: String!
    $settingImage: String!
    $settingTitle: String!
    $settingContent: String!
    $pointTitle: String!
    $pointContent1: String
    $pointContent2: String
    $pointContent3: String
    $featureImage1: String!
    $featureTitle1: String!
    $featureSubTitle1: String!
    $featureContent1: String!
    $featureImage2: String!
    $featureTitle2: String!
    $featureSubTitle2: String!
    $featureContent2: String!
    $specName: String!
    $specImage1: String!
    $specImage2: String!
    $specImage3: String!
    $specDetailTitle1: String
    $specDetailContent1: String
    $specDetailImage1: String
    $specDetailTitle2: String
    $specDetailContent2: String
    $specDetailImage2: String
    $specDetailTitle3: String
    $specDetailContent3: String
    $specDetailImage3: String
    $finalTitle: String!
    $finalContent: String!
    $cerIconImage1: String
    $cerIconImage2: String
    $cerIconImage3: String
    $cerIconImage4: String
    $cerIconImage5: String
    $cerIconImage6: String
    $cerContent1: String
    $cerContent2: String
    $cerContent3: String
    $cerContent4: String
    $cerContent5: String
    $cerContent6: String
    $filePath1: String!
    $fileOriginName1: String!
    $filePath2: String!
    $fileOriginName2: String!
  ) {
    registerProduct(
      thumbnailPath: $thumbnailPath
      thumbnailPath2: $thumbnailPath2
      colorImage: $colorImage
      productType: $productType
      productSubType: $productSubType
      keyType: $keyType
      mainTitle: $mainTitle
      productName: $productName
      modelName: $modelName
      size: $size
      weight: $weight
      productIcon: $productIcon
      iconContent1: $iconContent1
      productContent: $productContent
      warningContent: $warningContent
      settingImage: $settingImage
      settingTitle: $settingTitle
      settingContent: $settingContent
      pointTitle: $pointTitle
      pointContent1: $pointContent1
      pointContent2: $pointContent2
      pointContent3: $pointContent3
      featureImage1: $featureImage1
      featureTitle1: $featureTitle1
      featureSubTitle1: $featureSubTitle1
      featureContent1: $featureContent1
      featureImage2: $featureImage2
      featureTitle2: $featureTitle2
      featureSubTitle2: $featureSubTitle2
      featureContent2: $featureContent2
      specName: $specName
      specImage1: $specImage1
      specImage2: $specImage2
      specImage3: $specImage3
      specDetailTitle1: $specDetailTitle1
      specDetailContent1: $specDetailContent1
      specDetailImage1: $specDetailImage1
      specDetailTitle2: $specDetailTitle2
      specDetailContent2: $specDetailContent2
      specDetailImage2: $specDetailImage2
      specDetailTitle3: $specDetailTitle3
      specDetailContent3: $specDetailContent3
      specDetailImage3: $specDetailImage3
      finalTitle: $finalTitle
      finalContent: $finalContent
      cerIconImage1: $cerIconImage1
      cerIconImage2: $cerIconImage2
      cerIconImage3: $cerIconImage3
      cerIconImage4: $cerIconImage4
      cerIconImage5: $cerIconImage5
      cerIconImage6: $cerIconImage6
      cerContent1: $cerContent1
      cerContent2: $cerContent2
      cerContent3: $cerContent3
      cerContent4: $cerContent4
      cerContent5: $cerContent5
      cerContent6: $cerContent6
      filePath1: $filePath1
      fileOriginName1: $fileOriginName1
      filePath2: $filePath2
      fileOriginName2: $fileOriginName2
    )
  }
`;

export const CREATE_COLORIMAGES = gql`
  mutation createColorImages(
    $imagePath: String!
    $color: String!
    $colorCode: String!
    $sort: Int!
  ) {
    createColorImages(
      imagePath: $imagePath
      color: $color
      colorCode: $colorCode
      sort: $sort
    ) {
      _id
      imagePath
      color
      colorCode
    }
  }
`;
