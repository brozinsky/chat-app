import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
query GetRooms {
    usersRooms{
        user{
            email
            firstName
            id
            role
        }
        rooms{
            id
            name
            roomPic
        }
    }
}
`;