import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: ['soups', 'salads', 'desserts', 'gluten-free']
    }
  }

  renderDropdown() {
    let boxes = this.state.boxes.map((box, index) => 
      <option key={index}>{box}</option>
    );

    return boxes;
  }

  render() {
    let boxes = this.renderDropdown();
    return (
      <div className = "section">
        <form role="addBox" className="recipe-box">
          <div>
            <input type="input" className="field" placeholder="Add a new recipe box..." />
            <button>Add</button>
          </div>
          <div>
            <select>{boxes}</select>
            <button>List</button>
          </div>
        </form>
      </div>
    );
  }

}

export default Boxes;