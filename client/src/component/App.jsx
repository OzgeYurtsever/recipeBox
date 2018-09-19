import React, { Component } from 'react';
import Boxes from './Boxes.jsx';
import RecipeFields from './RecipeFields.jsx';
import RecipeList from './RecipeList.jsx';
import axios from 'axios';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeTitle: '',
      recipeURL: '',
      boxTitle: '',
      selectedBox: '',
      box: 'soups',
      recipesToList: [],
      boxes: [],
      lastBoxUsed: '',
      newBox: '',
      searchKey: ''
    };

    this.handleBoxSelection = this.handleBoxSelection.bind(this);
    this.handleAddRecipe = this.handleAddRecipe.bind(this);
    this.handleRecipeSearch = this.handleRecipeSearch.bind(this);
    this.handleAddBox = this.handleAddBox.bind(this);
    this.handleChangeInRecipeTitle = this.handleChangeInRecipeTitle.bind(this);
    this.handleChangeInRecipeURL = this.handleChangeInRecipeURL.bind(this);
    this.handleNewBoxNameEntry = this.handleNewBoxNameEntry.bind(this);
    this.handleSearhKey = this.handleSearhKey.bind(this);
  }   

  componentDidMount() {
    this.getDataOnSelection(this.state.box);
    this.getListOfBoxes();
  }

  handleBoxSelection(event) {
    event.preventDefault();
    const selectedBox = event.target.value;
    this.setState({box: selectedBox});
    this.getDataOnSelection(selectedBox);
  }

  handleNewBoxNameEntry(e) {
    e.preventDefault;
    console.log(e.target.value);
    this.setState({newBox: e.target.value});
  }

  handleAddBox(e) {
    e.preventDefault();
    if (this.state.newBox.length === 0) {
      alert('Please insert a box name!');
      return;
    }
    this.postRecipe(this.state.newBox, '', '');
    this.getListOfBoxes();
  }

  handleChangeInRecipeTitle(event) {
    event.preventDefault();
    this.setState({recipeTitle: event.target.value});
  }

  handleChangeInRecipeURL(event) {
    event.preventDefault();
    this.setState({recipeURL: event.target.value});    
  }

  handleAddRecipe(event) {
    event.preventDefault();
    this.postRecipe(this.state.box, this.state.recipeTitle, this.state.recipeURL);
    this.setState({recipeTitle: '', recipeURL: ''});
    this.getDataOnSelection(this.state.box);
  }

  handleSearhKey(e) {
    e.preventDefault();
    this.setState({searchKey: e.target.value});
  }

  handleRecipeSearch(e) {
    e.preventDefault();
    this.getDataOnSearch(this.state.searchKey);
  }

  getListOfBoxes() {
    let url = '/api/home/newBox';
    const self = this;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ boxes: data }))
      .catch(() => {
        console.log("error in getting recipe list")});
  }

  postRecipe(boxName, recipeTitle, recipeLink) {
    axios.post('/api', {
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
    let url = `/api/search/${keyWord}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ recipesToList: data }))
      .catch(() => {
        console.log("error in getiing search result")});
  }
  
  getDataOnSelection(boxName) {
    let url = `/api/${boxName}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ recipesToList: data }))
      .catch(() => {
        console.log("error in getting data from dropdown selection")});
  }

  render() {
    return (
      <div> 
        <h2> My recipe box </h2>
        <Search onClick={this.handleRecipeSearch} onChange={this.handleSearhKey}/>
        <div className="adding-fields">
          <RecipeFields onAddRecipe={this.handleAddRecipe} onRecipeTitle={this.handleChangeInRecipeTitle} 
            onRecipeURL={this.handleChangeInRecipeURL}/>
          <Boxes boxes={this.state.boxes} onSelection={this.handleBoxSelection} 
            onChange = {this.handleNewBoxNameEntry} onBoxAdd={this.handleAddBox}/>
        </div>
        <RecipeList recipes={this.state.recipesToList}/>
      </div>
    );
  }
}

export default App;