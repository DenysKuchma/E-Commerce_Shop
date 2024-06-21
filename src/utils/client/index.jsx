import { ApolloClient, InMemoryCache } from "@apollo/client";

const GQL_SERVER_URL = "https://shop-roles.node.ed.asmer.org.ua/graphql";

const client = new ApolloClient({
  uri: GQL_SERVER_URL,
  cache: new InMemoryCache(),
});

export default client;
