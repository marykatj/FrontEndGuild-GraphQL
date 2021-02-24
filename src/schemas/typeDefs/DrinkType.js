const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

const DrinkType = new GraphQLObjectType({
    name: 'Drink',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        tags: {type: GraphQLList(GraphQLString)},
        ingredients: {type: GraphQLList(GraphQLString)},
        instructions: {type: GraphQLString},
    })
});

module.exports = DrinkType;


