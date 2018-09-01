import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderDropdown() {
    let boxes = this.props.boxes.map((box, index) => 
      <option key={index}>{box.boxname}</option>
    );

    return boxes;
  }

  render() {
    let boxes = this.renderDropdown();
    return (
      <div className = "section">
        <form role="addBox" className="recipe-box">
          <div>
            <input type="input" className="field" id="newBox" placeholder="Add a new recipe box..." />
            <button onClick={this.props.onBoxAdd}>Add</button>
          </div>
          <div>
            <select onChange={this.props.onChange} className="dropdown" id="boxes">{boxes}</select>
            {/* <button>List</button> */}
          </div>
        </form>
      </div>
    );
  }

}

export default Boxes;