import { gql } from "@apollo/client";

export const GET_SIGN_LIST = gql`
  query getSignList {
    getSignList {
      _id
      title
      thumbnail
      type
      isDelete
    }
  }
`;

export const MODIFY_SIGN_BASIC = gql`
  mutation modifySignBasic(
    $id: String!
    $title: String!
    $type: String!
    $thumbnail: String!
  ) {
    modifySignBasic(id: $id, title: $title, type: $type, thumbnail: $thumbnail)
  }
`;

export const DELETE_SIGN = gql`
  mutation deleteSign($id: String!) {
    deleteSign(id: $id)
  }
`;
