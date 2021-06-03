import { setContext } from '@apollo/client/link/context'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { API_URL, API_TOKEN, API_WS } from "@env"
import * as AbsintheSocket from "@absinthe/socket"
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link"
import { Socket as PhoenixSocket } from "phoenix"
import { hasSubscription } from "@jumpn/utils-graphql"
import { split } from "apollo-link"


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

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket(API_WS, {
    params: () => {
        if (API_TOKEN) {
            return { token: API_TOKEN };
        } else {
            return {};
        }
    }
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);
const websocketLink = createAbsintheSocketLink(absintheSocket);

const link = split(
    operation => hasSubscription(operation.query),
    websocketLink,
    authedHttpLink
);

export const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
});