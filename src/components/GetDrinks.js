import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_DRINKS } from '../GraphQL/Queries';

const GetDrinks = () => {
    const [drinks, setDrinks] = useState([]);
    const {error, loading, data} = useQuery(LOAD_DRINKS);

    useEffect(() => {
        if (data) {
         setDrinks(data.getAllDrinks);
        }
    }, [data]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Whoops... something went wrong</p>
    }

    return (
        <div>
            {drinks.map(drink => <p key={drink.id}>{drink.name}</p>)}
        </div>
    )
};

export default GetDrinks;
