import React, {Component} from 'react';

const List = (props) => {
    let recipes = props.recipes.map((recipe, index) =>
        <li key={index}><a href={recipe.link}>{recipe.title}</a></li>
        
    );
    return <ul>{recipes}</ul>
}

export default List;