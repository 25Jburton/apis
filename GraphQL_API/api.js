const { buildSchema } = require('./node_modules/graphql');
const { createHandler } = require('./node_modules/graphql-http/lib/use/express');
const express = require('express');
const { ruruHTML } = require('./node_modules/ruru/dist/server');
const app = express();

// Serve the GraphiQL IDE.
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`type Query { sampleData: String } `); 

// The root provides a resolver function for each API endpoint
const root = {
  sampleData() {
    return 'Return the data';
  },
};

// Create and use the GraphQL handler.
app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: root,
  }),
);
 
// Start the server at port
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');