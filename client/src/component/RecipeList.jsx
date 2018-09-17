import React from 'react';

const RecipeList = (props) => {
    let recipes = props.recipes.map((recipe, index) => {
        if(recipe.title.length > 0) {
            return <li key={index}><a href={recipe.link} target="_blank">{recipe.title}</a></li>;
        }
    });
    return <ul>{recipes}</ul>
}

export default RecipeList;