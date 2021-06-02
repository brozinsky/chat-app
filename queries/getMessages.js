import { gql } from "@apollo/client"

export const GET_MESSAGES = gql`
query GetMessages($id: [ID!]) {
    room(id: $id) {

        messages {
          id
          body
          insertedAt

        }
      }
    }
`;


