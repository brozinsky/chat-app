import { gql } from "@apollo/client";

export const MESSAGE_ADDED = gql`
subscription OnMsgAdded($roomId: ID!) {
    messageAdded(roomId: $roomId) {
        body
        id
        insertedAt
        user {
            email
            firstName
            id
            lastName
            profilePic
        }
    }
  }
`;