# Getting Started

+ clone this repo locally
+ `npm install`
+ You need to be on node 10: `nvm use 10`
+ cd into the `server` directory, and run `node server.js`
+ In another terminal window, in the main `FrontEndGuild-GraphQL` directory, run `npm start`
+ If anything fails, just double check you're on the correct version of node
+ Visit `http://localhost:4000/graphql` to test your queries and mutations.

# Quick notes

Any changes you make to the Schema (Types, Root Query or Mutation) will require the server to be restarted.
Here are some sample queries and mutations to get started:

`query {
	getAllDrinks {
		name
  }
}`

`query {
	getDrinkById(id:1) {
		name
		instructions
		tags
  }
}`

`mutation {
	createDrink(
		name: “Whiskey Sour”
		tags: [“grandma’s fav”]
		ingredients: [“2 oz bourbon”, “¾ oz lemon”, “¾ oz simple syrup”]
    instructions: “shake well”	
  ) {
    name
  }
}`

After running the `mutation`, you should be able to see your drink added to the list by running the `getAllDrinks` query again.

# Front End Guild GraphQL Sample

Here you will find a basic working example of GraphQL
The backend work can be found in the `server` folder, and the front end work can be found in the `src` folder.

## SERVER

Express & GraphQL

### server.js

+ Create an express instance
+ Schema is an object of queries and mutations --> Query is how we `GET` the data && Mutations are how we `CREATE`, `UPDATE` and `DELETE` the data

### Types

+ Here we have a Type Definition for a Drink, with GraphQLObjectType
+ I would like to call out these handy types we get from GraphQL: GraphQL String, Int & List for Arrays
+ Fields represent the properties of a Drink object

### Schema

+ Typically would be hitting an API, but I kept it simple for this tutorial.  Feel free to substitute the `data` for and actual API endpoint.  The Star Wars API is a fun one: https://swapi.dev/ 
+ Export Schema at the bottom with Root Query and Mutation

#### Root Query

+ Root Query is another GraphQL Object Type
+ Fields represent the different queries we want
+ Type: define what is going to be returned - in this case a list of Drinks
+ Args: Optional, as you can see, we don’t need any args for “get all”.  But we need args if we are fetching a specific drink - passing the id makes sense here
+ Resolve: typically a promise, which I’ve commented out here.  In our case, it's just returning the mock data.

#### Mutation

+ Fields are functions that will be our `CREATE`, `UPDATE` and `DELETE`
+ Here our resolve, acts as a `POST`, but in our case it's just `data.push( )`

## CLIENT

Here we are using GraphQL and Apollo

### App.js

+ This is mainly boilerplate stuff, Basically we have our components, wrapped in `<ApolloClient />`, with a client prop passed to it
+ However, I do want to quickly point out the Error and Cache provided
+ I just added two very simple components to App: `<GetDrinks />`, which illustrates Queries and `<Form />`, which illustrates Mutations


### Queries.js

+ This code should look familiar, this is exactly what we plugged into our playground.  
+ This here showcases how easy it is to use GraphQL - we KNOW this works!  We were able to test this, and can test other queries and know exactly what data we will receive. 

### <GetDrinks />

+ Here we can take advantage of a `useQuery` hook provided by `apollo-client` - we pass the `LOAD_DRINKS` into the `useQuery` hook
+ Something nice about query is the object we receive is this nicely organized with 
`{ error, loading and data }`. This helps us code defensively, accounting for loading and errors.
+ This component will showcase our `GET`, by rendering a list of all drinks


### Mutations.js

+ This mutation looks mostly similar to the sandbox from earlier


### <Form />

+ Here we take advantage of the `useMutation` hook, following a somewhat similar pattern. The braces for the hook are slightly different than the query syntax.
+ This basic form shows how a `CREATE` mutation works
+ Upon filling out the form in the UI, we should be able to see those changes by refreshing the React localhost page, and also by returning the the GraphiQL playground and hitting the play button again.



