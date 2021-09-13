import { gql } from "@apollo/client";

export const GET_POPUP_ONE = gql`
  query getPopupOne($id: String!) {
    getPopupOne(id: $id) {
      _id
      title
      thumbnailPath
      isDelete
      createdAt
      deletedAt
      updatedAt
      link
      onoff
    }
  }
`;

export const MODIFY_POPUP = gql`
  mutation modifyPopup(
    $id: String!
    $title: String!
    $thumbnail: String!
    $link: String!
    $onoff: String!
  ) {
    modifyPopup(
      id: $id
      title: $title
      thumbnail: $thumbnail
      link: $link
      onoff: $onoff
    )
  }
`;
