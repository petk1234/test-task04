import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === "development",
  queryDeduplication: true,
});
export default client;
