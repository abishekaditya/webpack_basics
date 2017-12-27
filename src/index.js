import React from "react";
import ReactDOM from "react-dom";
import greet from "./greeter.js";

class Layout extends React.Component {
  render() {
    return (
      <h1>IT WORKS!</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);

greet();