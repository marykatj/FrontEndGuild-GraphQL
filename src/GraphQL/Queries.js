import { gql } from '@apollo/client';

export const LOAD_DRINKS = gql`
    query {
        getAllDrinks {
            id
            name
            tags
            ingredients
            instructions
        }
    }
`
