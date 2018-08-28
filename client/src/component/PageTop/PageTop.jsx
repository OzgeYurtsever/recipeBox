import React, { Component } from 'react';
// import '../../../styles/main.css';
import Boxes from './Boxes.jsx';
// import Seach from './Search.jsx';
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