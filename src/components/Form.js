import React, { Fragment, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_DRINK_MUTATION } from '../graphQL/Mutations';

const Form = () => {
    const [name, setName] = useState("");
    const [tags, setTags] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const [ createDrink, { error } ] = useMutation(CREATE_DRINK_MUTATION);

    const addDrink = () => {
        createDrink({
            variables: {
                name,
                tags: [tags],
                ingredients: [ingredients],
                instructions
            }
        });
    }

    if (error) {
        console.log(error);
    }

        return (
            <Fragment>
                <input
                    type="text"
                    placeholder="name"
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="tags"
                    onChange={e => setTags(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="ingredients"
                    onChange={e => setIngredients(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="instructions"
                    onChange={e => setInstructions(e.target.value)}
                />
                <button onClick={addDrink}>Submit</button>
            </Fragment>
        )
}

export default Form;
