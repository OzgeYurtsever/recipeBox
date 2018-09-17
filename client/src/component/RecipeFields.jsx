import React from 'react';

const RecipeFields = (props) => {
  return (
    <div className = "section">
      <form role="addRecipe">
        <div className="recipe-section">
          <div>
            <input type="input" className="field" 
              onChange={props.onRecipeTitle} placeholder="Add a title for the recipe..." />
          </div>
          <div>
            <input type="input" className="field" 
              onChange={props.onRecipeURL} placeholder="Link to the recipe..." />
            <button onClick={props.onAddRecipe}>Add Recipe</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RecipeFields;