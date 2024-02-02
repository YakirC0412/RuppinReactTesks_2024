import { Component } from "react";

export default class Q2Comp extends Component {
  constructor(props) {
         super(props); 
         this.state= { 
          P_Firstname:"",
          P_Lastname:"",
          P_Grade:"",
          P_CheckGrade:"",
          P_Grade_Color:""
         }; 
    } 
    AlertFocus = (P_type) => {
      if(P_type=='FirstName'){
        this.setState({ P_Firstname:'עליך למלא שם פרטי '});
      }
      if(P_type=='LastName'){
       this.setState({P_Lastname:'עליך למלא שם משפחה'});
      }
      if(P_type=='Grade'){
       this.setState({P_Grade:'עליך למלא ציון פסיכומטרי'});
      }
    };
    
    AlertBlur = () => {
      this.setState({
        P_Firstname: "",
        P_Lastname: "",
        P_Grade: "",
      });
    };

    CheckGrade = (Grade) =>{
      const grade = Number(Grade.target.value);
      if(grade>555){
        this.setState({
          P_CheckGrade:'אתה יכול להתקבל ללימודים',
          P_Grade_Color: 'green'
        });
      }
      else{
        this.setState({
          P_CheckGrade:'עליך לנסות שוב בשנה הבאה',
          P_Grade_Color: 'red'
        });
      }

    }

    render() {
      return (
      <>
        <h2>Q2</h2>
        <form id="MainForm">
          <p>First Name:</p>
          <p style={{color:"red"}}>{this.state.P_Firstname}</p>
          <input type="textbox"
            onFocus={()=>
              {this.AlertFocus('FirstName')}}
            onBlur={()=>{this.AlertBlur()}}/>

            <p>Last Name:</p>
            <p style={{color:"red"}}>{this.state.P_Lastname}</p>
            <input type="textbox"
            onFocus={()=>
            {this.AlertFocus('LastName')}}
            onBlur={()=>{this.AlertBlur()}}/>

            <p>Psychometric Grade:</p>
            <p style={{color:"red"}}>{this.state.P_Grade}</p>
            <input type="number"
            onFocus={()=>
              {this.AlertFocus('Grade')}}
              onBlur={(grade)=>{
                this.AlertBlur()
                this.CheckGrade(grade)
              }}/>
            <p style={{ fontWeight: 'bold', color: this.state.P_Grade_Color }}>{this.state.P_CheckGrade}</p>
        </form>
        </>
     ); 
    } 
}