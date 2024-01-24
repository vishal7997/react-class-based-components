import { Component } from "react";

class Demo extends Component {
  constructor() {
    super(); //calling constructor of Component class -> mandatory

    // state initialisation // always assigned with an Object
    this.state = { showParagraph: true, count: 0 };
  }

  toggleParagraph() {
    // console.log(this);
    this.setState((currState) => {
      return {showParagraph: !currState.showParagraph};
    }); // this will not override this.state object, only showParagraph property will be updated here.
  }
  render() {
    return (
      <>
        <h3>{this.props.name}</h3>
        {this.state.showParagraph && <p>{this.props.children}</p>}
        <button onClick={this.toggleParagraph.bind(this)}>{this.state.showParagraph ? 'Hide' : 'Show'}</button>
      </>
    );
  }
}

export default Demo;
