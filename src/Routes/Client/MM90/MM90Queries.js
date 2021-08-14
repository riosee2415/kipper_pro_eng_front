import { gql } from "@apollo/client";

export const GET_TOKEN_FOR_LOGIN = gql`
  query getTokenForLogin($userId: String!, $password: String!) {
    getTokenForLogin(userId: $userId, password: $password) {
      _id
    }
  }
`;
