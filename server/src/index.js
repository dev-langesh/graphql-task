const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { connectDb } = require("../lib/connectDb");
const { resolvers } = require("./schema/resolvers");
const { typeDefs } = require("./schema/typedefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  connectDb();

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: 8000,
    },
  });

  console.log(`Server ready at: ${url}`);
}

startServer();
