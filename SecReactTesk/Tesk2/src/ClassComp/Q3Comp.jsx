import { Component } from "react";

export default class Q3Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderWidth: "100%",
    };
  }
  widthChange = (Num) => {
    this.setState({ borderWidth: `${Num}` });
  };
  render() {
    return (
      <>
        <h2>Q3:</h2>
        <table
          border="5"
          style={{ width: this.state.borderWidth }}
          onClick={() => {
            this.widthChange("50%");
          }}
          onDoubleClick={() => {
            this.widthChange("100%");
          }}
        >
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
        </table>
      </>
    );
  }
}