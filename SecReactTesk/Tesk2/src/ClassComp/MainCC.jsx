import { Component } from "react";
import Q1Comp from "./Q1Comp";
import Q2Comp from "./Q2Comp";
import Q3Comp from "./Q3Comp";
export default class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Q1Comp/>
        <Q2Comp/>
        <Q3Comp/>
      </>
    );
  }
}