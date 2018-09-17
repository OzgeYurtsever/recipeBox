import React, { Component } from 'react';

const Boxes = props => {
  let boxes = props.boxes.map((box, index) => <option key={index}>{box.boxname}</option>);
  return (
    <div className = "section">
      <form role="addBox" className="recipe-box">
        <div>
          <input type="input" className="field" id="newBox" placeholder="Add a new recipe box..." />
          <button onClick={props.onBoxAdd}>Add</button>
        </div>
        <div>
          <select onChange={props.onChange} className="dropdown" id="boxes">{boxes}</select>
          {/* <button>List</button> */}
        </div>
      </form>
    </div>
  );
}

export default Boxes;