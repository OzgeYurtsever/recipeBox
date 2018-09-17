import React from 'react';

const Boxes = props => {
  let boxes = props.boxes.map((box, index) => <option key={index}>{box.boxname}</option>);
  return (
    <div className = "section">
      <form role="addBox" className="recipe-box">
        <div>
          <input type="input" className="field" onChange={props.onChange} placeholder="Add a new recipe box..." />
          <button onClick={props.onBoxAdd}>Add</button>
        </div>
        <div>
          <select onChange={props.onSelection} className="dropdown">{boxes}</select>
        </div>
      </form>
    </div>
  );
}

export default Boxes;