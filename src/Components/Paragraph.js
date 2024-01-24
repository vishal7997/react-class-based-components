import { Component } from "react";

class Paragraph extends Component {
  componentWillUnmount() {
    // cleanup function in useEffect
    console.log("componentWillUnmount called");
  }

  render() {
    return <p>This is a Demo paragraph</p>;
  }
}

export default Paragraph;
