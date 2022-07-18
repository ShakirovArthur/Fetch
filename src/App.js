import React, { Component } from "react";
import "./styles.css";

export default class Pokemon extends Component {
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div className="App"></div>;
  }
}
