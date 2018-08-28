import React, { Component } from 'react';
import PageTop from './PageTop/PageTop.jsx';
import List from './List/List.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: 'soups',
      recipesToList: []
    };
    this.handleBoxSelection = this.handleBoxSelection.bind(this);
  }   

  handleBoxSelection(e) {
    e.preventDefault();
    let boxName = document.getElementById("boxes").value;
    // let boxName = selection.options[selection.selectedIndex].value;
    this.setState({box: boxName});
    this.getDataOnSelection(boxName);
    // console.log(boxName);
  }

  componentDidMount() {
    this.getDataOnSelection(this.state.box);
  }

  getDataOnSelection(boxName) {
    // console.log('inside get', boxName);
    let url = `/api/home/${boxName}`;
    // console.log(url);
    const self = this;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ recipesToList: data }))
      .catch(() => {
        console.log("error")});
  }

  render() {
    return (
      <div> 
        <h2> My recipe box </h2>
        <PageTop onChange={this.handleBoxSelection}/>
        <List recipes={this.state.recipesToList}/>
      </div>
    );
  }
}

export default App;