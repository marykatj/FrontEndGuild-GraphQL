const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt
} = require("graphql");
const data = require("../../MOCK_DATA.json");
const DrinkType = require("./typeDefs/DrinkType");
//const axios = require('axios');

const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
        getAllDrinks: {
            type: new GraphQLList(DrinkType),
            resolve(parent, args) {
                return data;
                // axios.get("https://swapi.dev/api/people/").then(response => response.data)
            }
        },
        getDrinkById: {
            type: DrinkType,
            args: { id: {type: GraphQLInt}},
            resolve(parent, args) {
                return data[args.id]
                // return axios.get(`https://swapi.dev/api/people/${args.id}`).then(response => response.data)
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createDrink: {
            type: DrinkType,
            args: {
                name: {type: GraphQLString},
                tags: {type: GraphQLList(GraphQLString)},
                ingredients: {type: GraphQLList(GraphQLString)},
                instructions: {type: GraphQLString},
            },
            resolve(parent, args) {
                data.push({
                    id: data.length + 1, // ID created automatically, except Im using fake data, so I had to create it individually
                    name: args.name,
                    tags: args.tags,
                    ingredients: args.ingredients,
                    instructions: args.instructions
                })
                return args //just to confirm it worked correctly.
            }
        }
    }
})


module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation});
