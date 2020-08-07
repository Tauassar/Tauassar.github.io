import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.onClickEvent(this.props);
  }

  render(){
    const symbol = this.props.symbol;
    const id = this.props.id;
    return (
        <button onClick={this.handleClick} id={id} className='GridButton'>{symbol}</button>
    );
  }
}

export default Button;
