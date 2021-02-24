import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetDrinks from './components/GetDrinks'; // Query
import Form from './components/Form'; // Mutation

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

function App() {

  return (
    <ApolloProvider client={client}>
      <GetDrinks />
      <Form />
    </ApolloProvider>
  );
}

export default App;
