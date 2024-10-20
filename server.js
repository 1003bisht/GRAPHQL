const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const path = require('path'); // Import the path module

// Load type definitions and resolvers
const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
    const app = express();

    // Create the executable schema
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray,
    });

    // Initialize Apollo Server with the schema
    const server = new ApolloServer({
        schema
    });

    await server.start();

    // Apply middleware to integrate Apollo Server with Express
    server.applyMiddleware({
        app,
        path: '/graphql'
    });

    // Start the Express app
    app.listen(3000, () => {
        console.log('Running the GraphQL Server on port 3000...');
    });
}

// Start the Apollo Server
startApolloServer();
