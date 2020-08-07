import React from 'react';
import Button from './button.jsx';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.onClick=this.onClick.bind(this)
    this.iterButtons=this.iterButtons.bind(this)
  }

  onClick(val){
    this.props.onClickEvent(val);
  }

  iterButtons(value, index, array){
    if(value.attribute){
      return <Button id={value.attribute} symbol={value.symbol} onClickEvent={this.onClick} />;
    }
    return <Button symbol={value.symbol} value={value.value} onClickEvent={this.onClick} />;
  }

  render(){
    return (
      <div className="grid-container-numbers">
        {this.props.buttons.map(this.iterButtons)}
      </div>
    );
  }
}

export default Main;
