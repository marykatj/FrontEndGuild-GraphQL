import { gql } from '@apollo/client';

export const CREATE_DRINK_MUTATION = gql`
    mutation createDrink(
            $name: String!
            $tags: [String]
            $ingredients: [String]
            $instructions: String!
        ) {
        createDrink(
            name: $name
            tags: $tags
            ingredients: $ingredients
            instructions: $instructions
            ) {
                name
        }
    }
`;
