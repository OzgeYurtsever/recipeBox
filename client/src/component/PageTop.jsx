import React, { Component } from 'react';
import Boxes from './Boxes.jsx';
import RecipeFields from './RecipeFields.jsx';

class PageTop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {/* <Seach /> */}
        <div className="adding-fields">
          <div>
          <RecipeFields onClick={this.props.onClick}/>
          </div>
          <div>
          <Boxes boxes={this.props.boxes} onChange={this.props.onChange} 
            onBoxAdd={this.props.onBoxAdd}/>
          </div>
        </div>
      </div>

    );
  }
}

export default PageTop;