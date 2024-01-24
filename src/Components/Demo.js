import { Component } from "react";
import Paragraph from "./Paragraph";

class Demo extends Component {
  constructor() {
    super(); //calling constructor of Component class -> mandatory

    // state initialisation // always assigned with an Object
    this.state = { showParagraph: true, count: 0 };
  }

  componentDidMount() {
    // useEffect without any dependencies
    // LOGIC TO HANDLE SIDE EFFECTS
    console.log("componentDidMount Called");
  }

  componentDidUpdate(prevProps, prevState) {
    // useEffect with dependencies
    // LOGIC TO HANDLE SIDE EFFECTS WHENEVER STATE CHANGES
    // console.log("componentDidUpdate Called");
    // if (prevState.count != this.state.count)
    //   this.setState({ count: this.count + 1 });

    // try{
    //     throw new Error("An error has occured!");
    // } catch(error) {
    //     alert(error.message);
    // }
    throw new Error("An error has occured!");
  }

  toggleParagraph() {
    // console.log(this);
    this.setState((currState) => {
      return { showParagraph: !currState.showParagraph };
    }); // this will not override this.state object, only showParagraph property will be updated here.
  }
  render() {
    return (
      <>
        <h3>{this.props.name}</h3>
        {this.state.showParagraph && <Paragraph />}
        <button onClick={this.toggleParagraph.bind(this)}>
          {this.state.showParagraph ? "Hide" : "Show"}
        </button>
      </>
    );
  }
}

export default Demo;
