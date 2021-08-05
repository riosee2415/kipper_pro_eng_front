import { gql } from "@apollo/client";

export const CREATE_CONTACT = gql`
  mutation createDirectRequest(
    $type: String!
    $typeDesc: String!
    $goal: String!
    $name: String!
    $email: String!
    $mobile: String!
    $company: String!
    $department: String!
    $chargeNum: String!
    $faxNum: String!
    $desc: String!
  ) {
    createDirectRequest(
      type: $type
      typeDesc: $typeDesc
      goal: $goal
      name: $name
      email: $email
      mobile: $mobile
      company: $company
      department: $department
      chargeNum: $chargeNum
      faxNum: $faxNum
      desc: $desc
    )
  }
`;
