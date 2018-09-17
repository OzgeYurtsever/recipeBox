import React, { Component } from 'react';

class RecipeFields extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {title: '', link: ''};
  }

  render() {
    return (
      <div className = "section">
        <form role="addRecipe">
          <div className="recipe-section">
            <div>
              <input type="input" className="field" 
                onChange={this.props.onRecipeTitle} placeholder="Add a title for the recipe..." />
            </div>
            <div>
              <input type="input" className="field" 
                onChange={this.props.onRecipeURL} placeholder="Link to the recipe..." />
              <button onClick={this.props.onAddRecipe}>Add Recipe</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default RecipeFields;