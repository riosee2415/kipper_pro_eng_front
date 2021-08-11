import { gql } from "@apollo/client";

export const GET_ALL_TOKEN = gql`
  query getAllToken {
    getAllToken {
      _id
      userId
      passWord
      passWordRe
      contry
      level
      companyName
      charge
      email
      tel
      createdAt
      isDelete
    }
  }
`;

export const DELETE_TOKEN = gql`
  mutation deleteToken($id: String!) {
    deleteToken(id: $id)
  }
`;

export const CREATE_TOKEN = gql`
  mutation createToken(
    $userId: String!
    $passWord: String!
    $passWordRe: String!
    $contry: String!
    $level: String!
    $companyName: String!
    $charge: String!
    $email: String!
    $tel: String!
  ) {
    createToken(
      userId: $userId
      passWord: $passWord
      passWordRe: $passWordRe
      contry: $contry
      level: $level
      companyName: $companyName
      charge: $charge
      email: $email
      tel: $tel
    ) {
      _id
      userId
      passWord
      passWordRe
      contry
      level
      companyName
      charge
      email
      tel
    }
  }
`;
