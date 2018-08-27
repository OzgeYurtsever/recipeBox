import React, { Component } from 'react';
import PageTop from './PageTop/PageTop.jsx';
import List from './List/List.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipesToList: [{title: 'lentil soup', link:'https://www.foodnetwork.com/recipes/alton-brown/lentil-soup-recipe-1947017'}]
    };
  }   

  render() {
    return (
      <div> 
        <h2> My recipe box </h2>
        <PageTop />
        <List recipes={this.state.recipesToList}/>
      </div>
    );
  }
}

export default App;