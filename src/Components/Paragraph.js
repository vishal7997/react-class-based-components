import { Component } from "react";
import DemoContext from "../DemoContext";

class Paragraph extends Component {
  static contextType = DemoContext; // one way to use context in class based components
  componentWillUnmount() {
    // cleanup function in useEffect
    console.log("componentWillUnmount called");
  }

  render() {
    return <p>{this.context.value}</p>;
  }

  //   render() {
  //     return (
  //       <DemoContext.Consumer> // another way to use context in class based components
  //         {(ctx) => {
  //             return (
  //                 <p>{ctx.value}</p>
  //             )
  //         }}
  //       </DemoContext.Consumer>
  //     );
  //   }
}

export default Paragraph;
