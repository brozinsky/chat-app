import { setContext } from '@apollo/client/link/context';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { API_URL, API_TOKEN } from "@env"

const httpLink = createHttpLink({
    uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
    const token = API_TOKEN
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

// client
//     .query({
//         query: gql`
//     query GetRooms {
//         usersRooms{
//             user{
//                 email
//                 firstName
//                 id
//                 role
//             }
//             rooms{
//                 id
//                 name
//             }
//         }
//     }
//     `
//     })
//     .then(result => console.log(result));
