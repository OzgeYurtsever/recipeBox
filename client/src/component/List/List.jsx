import React, {Component} from 'react';

const List = (props) => {
    let recipes = props.recipes.map((recipe, index) => {
        console.log("recipe", recipe.title.length);
        if(recipe.title.length > 0) {
            return <li key={index}><a href={recipe.link} target="_blank">{recipe.title}</a></li>;
        }
    });
    return <ul>{recipes}</ul>
}

export default List;