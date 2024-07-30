import React from "react";

class OldComponent extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.onClickMore = this.onClickMore.bind(this);
  }

  onClickMore() {
    this.setState((state, props) => ({ count: state.count + 1 }));
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>CLASS!!!</h1>
        <p>{this.state.count}</p>
        <button onClick={this.onClickMore}>more</button>
      </div>
    );
  }
}

export default OldComponent;
