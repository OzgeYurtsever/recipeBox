import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class RecipeFields extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "section">
        <form role="addRecipe">
          <div className="recipe-section">
            <div>
              <input type="input" className="field" id ="title" placeholder="Add a title for the recipe..." />
            </div>
            <div>
              <input type="input" className="field" id="link" placeholder="Link to the recipe..." />
              <button onClick={this.props.onClick}>Add Recipe</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default RecipeFields;