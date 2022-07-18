import React, { Component } from "react";
import "./styles.css";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.results
        });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <ul>
          {items.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
