import React from 'react';
import Button from './button.jsx';

class Controls extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buttons: [
        {id:0, attribute:"", symbol:"/"},
        {id:1, attribute:"", symbol:"x"},
        {id:2, attribute:"", symbol:"-"},
        {id:3, attribute:"", symbol:"+"},
        {id:4, attribute:"", symbol:"="},
      ]
    }
    this.onClick=this.onClick.bind(this);
    this.iterButtons=this.iterButtons.bind(this);
  }

  onClick(val){
    this.props.onClickEvent(val);
  }

  iterButtons(value, index, array){
    return <Button symbol={value.symbol} value={value.value} onClickEvent={this.onClick} />;
  }

  render(){

    return (
      <div className="grid-container-controls">
        {this.props.buttons.map(this.iterButtons)}
      </div>
    );
  }
}

export default Controls;
