import React from 'react';
import './App.css';

import Header from './components/header.jsx';
import Numbers from './components/numbers.jsx';
import Controls from './components/controls.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value : "0",
      value2 : "0",
      operation: "none",
      numberButtons:[
        {id:0, attribute:"", symbol:"AC"},
        {id:1, attribute:"", symbol:"+/-"},
        {id:2, attribute:"", symbol:"%"},
        {id:3, attribute:"", symbol:"9"},
        {id:4, attribute:"", symbol:"8"},
        {id:5, attribute:"", symbol:"7"},
        {id:6, attribute:"", symbol:"6"},
        {id:7, attribute:"", symbol:"5"},
        {id:8, attribute:"", symbol:"4"},
        {id:9, attribute:"", symbol:"3"},
        {id:10, attribute:"", symbol:"2"},
        {id:11, attribute:"", symbol:"1"},
        {id:12, attribute:"zero", symbol:"0"},
        {id:13, attribute:"", symbol:"."},
      ],
      controlButtons:[
        {id:0, attribute:"", symbol:"/"},
        {id:1, attribute:"", symbol:"x"},
        {id:2, attribute:"", symbol:"-"},
        {id:3, attribute:"", symbol:"+"},
        {id:4, attribute:"", symbol:"="},
      ]
    }
    this.onNumberClick=this.onNumberClick.bind(this)
    this.onControlClick=this.onControlClick.bind(this)
    this.passValue=this.passValue.bind(this)
    this.returnResult=this.returnResult.bind(this)
  }

  onNumberClick(val){
    if(val.symbol==="AC"||val.symbol==="+/-"||val.symbol==="%"){
      switch(val.symbol){
        case "AC":
          this.setState({value:"0", value2:"0", operation:"none"});
          break;
        case "+/-":
        let temp = parseFloat(this.state.value)*(-1);
          this.setState({value:temp.toString()});
          break;
        case "%":
          console.log("persent");
          break;
        default:
          console.log("nothing");
      }
    }
    else{
    if(this.state.value==="0"){
      this.setState({value:val.symbol});
    }
    else{
      let x = this.state.value;
      this.setState({value:x+val.symbol});
    }}

  }

  onControlClick(val){
    switch(val.symbol){
      case "/":
        this.passValue(val.symbol);
        break;
      case "x":
        this.passValue(val.symbol);
        break;
      case "-":
        this.passValue(val.symbol);
        break;
      case "=":
        this.returnResult();
        break;
      case "+":
        this.passValue(val.symbol);
        break;
      default:
        console.log('error command keyboard');
    }
  }

  passValue(oper){
    let temp = this.state.value;
    this.setState({value2: temp, value: "0", operation: oper});
  }

  returnResult(){
    let oper = this.state.operation;
    let val1 = parseFloat(this.state.value2);
    let val2 = parseFloat(this.state.value);
    let temp;
    console.log(oper);
    // this.setState({value2: temp, value: "0"});
    switch(oper){
      case "/":
        temp = val1/val2;
        this.setState({value: temp});
        break;
      case "x":
        temp = val1*val2;
        this.setState({value: temp});
        break;
      case "-":
        temp = val1-val2;
        this.setState({value: temp});
        break;
      case "+":
        temp = val1+val2;
        this.setState({value: temp});
        break;
      default:
        console.log('error comand keyboard');
    }
  }


  render(){
    return (
      <div className="App">
        <Header value={this.state.value}/>
        <div className="keyboard">
          <Numbers onClickEvent={this.onNumberClick} buttons={this.state.numberButtons}/>
          <Controls onClickEvent={this.onControlClick} buttons={this.state.controlButtons}/>
        </div>
      </div>
    );
  }
}

export default App;
