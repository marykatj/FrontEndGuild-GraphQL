const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
const schema = require('./src/schemas');

const app = express();

app.use(cors()); // fixes CORS error

app.use('/graphql', graphqlHTTP({
  schema,     // schema: {query: RootQuery, mutation: Mutation}
  graphiql: true
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
