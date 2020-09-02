import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./Components/Card-List/card-list";
import SearchBar from "./Components/SearchBar/searchBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      kitties: [],
      searchField: "",
    };
  }

  componentDidMount() {
    //when rendered -> js fetches jsonplaceholder and return a promise
    fetch("https://jsonplaceholder.typicode.com/users")
      // converts fetch response to json so javascript can read
      .then((response) => response.json())
      //javascript takes response and store it as user property in monsters array
      .then((users) => this.setState({ kitties: users }));
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { kitties, searchField } = this.state;
    // filters through monsters and lowercases name
    const filteredKitties = kitties.filter((kitties) =>
      //also lowercases user input if the type capital letters
      kitties.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 id="app-name">The Whole Kit & Caboodle</h1>
        <h5>Find a kitty you like</h5>
        <SearchBar
          placeholder="Find a Kitty"
          handleChange={this.handleChange}
        />
        <CardList kitties={filteredKitties}></CardList>
      </div>
    );
  }
} //end of app

export default App;
