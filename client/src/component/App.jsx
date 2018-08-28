import React, { Component } from 'react';
import PageTop from './PageTop/PageTop.jsx';
import List from './List/List.jsx';
import axios from 'axios';
import Search from './PageTop/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: 'soups',
      recipesToList: [],
      boxes: [{boxname:'soups'}, {boxname:'salads'}, {boxname:'desserts'}, {boxname:'gluten-free'}]
    };
    this.handleBoxSelection = this.handleBoxSelection.bind(this);
    this.handleAddRecipe = this.handleAddRecipe.bind(this);
    this.handleRecipeSearch = this.handleRecipeSearch.bind(this);
    this.handleAddBox = this.handleAddBox.bind(this);
  }   

  handleBoxSelection(e) {
    e.preventDefault();
    let boxName = document.getElementById("boxes").value;
    // let boxName = selection.options[selection.selectedIndex].value;
    this.setState({box: boxName});
    this.getDataOnSelection(boxName);
    // console.log(boxName);
  }

  handleAddBox(e) {
    e.preventDefault();
    let newBoxName = document.getElementById("newBox").value;
    if (newBoxName.length === 0) {
      alert('Please insert a box name!');
      return;
    }
    this.postRecipe(newBoxName, '', '');
    document.getElementById("newBox").value = '';
    this.getListOfBoxes(newBoxName);
  }

  componentDidMount() {
    this.getDataOnSelection(this.state.box);
    this.getListOfBoxes();
  }

  getListOfBoxes() {
    let url = '/api/newBox';
    console.log(url);
    const self = this;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ boxes: data }))
      .then(data => console.log('here!!!!', data))
      .catch(() => {
        console.log("error")});

    // axios.get(url)
    //   .then(res => {
    //     const boxesData = res.data;
    //     this.setState({ boxes: boxesData });
    //   })

  }

  handleAddRecipe(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let link = document.getElementById("link").value;
    let boxName = document.getElementById("boxes").value;
    this.postRecipe(boxName, title, link);
    document.getElementById("title").value = '';
    document.getElementById("link").value = '';
  }

  handleRecipeSearch(e) {
    e.preventDefault();
    let keyWord = document.getElementById("search").value;
    console.log(keyWord);
    this.getDataOnSearch(keyWord);

  }

  postRecipe(boxName, recipeTitle, recipeLink) {
    console.log('inside post in client', boxName, title);
    axios.post('/api/home', {
      box: boxName,
      title: recipeTitle,
      link: recipeLink
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getDataOnSearch(keyWord) {
    let url = `/api/home/search/${keyWord}`;
    // console.log(url);
    // const self = this;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ recipesToList: data }))
      .catch(() => {
        console.log("error")});
  }
  
  getDataOnSelection(boxName) {
    // console.log('inside get', boxName);
    let url = `/api/home/${boxName}`;
    // console.log(url);
    // const self = this;
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
        <Search onClick={this.handleRecipeSearch}/>
        <PageTop boxes={this.state.boxes} onChange={this.handleBoxSelection}
            onClick={this.handleAddRecipe} onBoxAdd={this.handleAddBox}/>
        <List recipes={this.state.recipesToList}/>
      </div>
    );
  }
}

export default App;