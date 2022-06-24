import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r428p80jub01zc42s60j6l/master',
    cache: new InMemoryCache()
})