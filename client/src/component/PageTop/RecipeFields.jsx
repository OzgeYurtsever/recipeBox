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
              <input type="input" className="field" placeholder="Add a title for the recipe..." />
            </div>
            <div>
              <input type="input" className="field" placeholder="Link to the recipe..." />
              <button>Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default RecipeFields;