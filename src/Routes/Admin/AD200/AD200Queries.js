import { gql } from "@apollo/client";

export const CREATE_SIGN = gql`
  mutation createSign($thumbnail: String!, $title: String!, $type: String!) {
    createSign(thumbnail: $thumbnail, title: $title, type: $type)
  }
`;
