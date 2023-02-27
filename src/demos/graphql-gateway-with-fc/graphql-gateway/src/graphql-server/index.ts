import { ApolloServer } from '../apollo-engine';

import { default as typeDefs } from '../graphql-schema/schema.graphql';
import * as resolvers from '../graphql-resolvers';
// @ts-ignore
let server = new ApolloServer({
  typeDefs,
  resolvers,
});

export { server };

