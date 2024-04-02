const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
// const { expressMiddleware } = require('@apollo/server/express4');
// const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
// const express = require('express');
// const http = require('http');
// const cors = require('cors');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 5008 }
  });
  console.log(`Server running at ${url}`);
})()