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
      lastBoxUsed: ''
    };
    this.handleBoxSelection = this.handleBoxSelection.bind(this);
    this.handleAddRecipe = this.handleAddRecipe.bind(this);
    this.handleRecipeSearch = this.handleRecipeSearch.bind(this);
    this.handleAddBox = this.handleAddBox.bind(this);
    this.handleChangeInRecipeTitle = this.handleChangeInRecipeTitle.bind(this);
    this.handleChangeInRecipeURL = this.handleChangeInRecipeURL.bind(this);
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
    // this.setState({box: this.state.box});
    // window.location.reload();
    // this.handleBoxSelection();
  }

  handleRecipeSearch(e) {
    e.preventDefault();
    let keyWord = document.getElementById("search").value;
    this.getDataOnSearch(keyWord);
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
    console.log(boxName);
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
        <Search onClick={this.handleRecipeSearch}/>
        <div className="adding-fields">
          <RecipeFields onAddRecipe={this.handleAddRecipe} onRecipeTitle={this.handleChangeInRecipeTitle} 
            onRecipeURL={this.handleChangeInRecipeURL}/>
          <Boxes boxes={this.state.boxes} onChange={this.handleBoxSelection} 
              onBoxAdd={this.props.onBoxAdd}/>
        </div>
        <RecipeList recipes={this.state.recipesToList}/>
      </div>
    );
  }
}

export default App;