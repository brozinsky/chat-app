import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
mutation($body: String!, $roomId: String! ) {
    sendMessage(body: $body, roomId: $roomId) {
      body
      id
      insertedAt
      user {
        email
        firstName
        id
        lastName
        profilePic
        role
      }
    }
  }
`;