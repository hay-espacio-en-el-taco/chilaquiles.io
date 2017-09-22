var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();

module.exports = {
    start: (port, path) => {
        app.use(
            path, 
            graphqlHTTP({
                schema: schema,
                rootValue: root,
                graphiql: true,
            })
        )

        app.listen(port)
        console.log(`Running a GraphQL API server at localhost:${port}/${path}`)
    }
}
