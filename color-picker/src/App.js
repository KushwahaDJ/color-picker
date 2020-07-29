import React, { Component } from "react";
import colors from "./colors";

class App extends Component {
  state = { col: { name: "white", color: "#fff" } };
  setColor = col => {
    console.log(col);
    this.setState({ col });
  };
  render() {
    console.log(colors);
    return (
      <div className="App">
        {colors[0].colors.map(col => (
          <div
            onClick={() => {
              console.log(col);
              this.setColor(col);
            }}
            style={{
              "background-color": col.color,
              width: "30px",
              height: "30px"
            }}
            className="bg"
          ></div>
        ))}
        <div
          style={{
            "background-color": this.state.col.color,
            width: "450px",
            height: "450px"
          }}
        >
          <div>{this.state.col.name}</div>
          <div>{this.state.col.color}</div>
        </div>
      </div>
    );
  }
}

export default App;
