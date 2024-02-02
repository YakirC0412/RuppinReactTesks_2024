import { Component } from "react";

export default class Q1Comp extends Component {
  constructor(props) {
         super(props); 
         this.state= { 
            color:"",
         }; 
    } 
    chgcolor = (color) => {
        this.setState({ color: color });
      };       

    render() {
         return (
        <>
        <h2>Q1</h2>
          <div
          style={{
            backgroundColor: this.state.color,
            border: "2px solid black",
            marginTop: "20px",
            marginBottom: "100px",
            padding: "15px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          >
             <button onClick={() => this.chgcolor("red")}>Red</button>
             <button onClick={() => this.chgcolor("yellow")}>Yellow</button>
             <button onClick={() => this.chgcolor("blue")}>Blue</button>
             <button onClick={() => this.chgcolor("white")}>White</button>
             <button onClick={() => this.chgcolor("orange")}>Orenge</button>
             <button onClick={() => this.chgcolor("purple")}>Purple</button>
             <button onClick={() => this.chgcolor("green")}>Green</button>
             <button onClick={() => this.chgcolor("pink")}>Pink</button>
            </div> 
        </>
     ); 
    } 
}