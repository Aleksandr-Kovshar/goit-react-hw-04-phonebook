import React, { Component } from "react";
import "./App.css";
import Phonebook from "./components/Phonebook";

class App extends Component {
  state = {
    
  };

  render() {
    return (
      <div className="App">
        <Phonebook />
      </div>
    );
  }
}

export default App;
