import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.props.onDisplayChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    return(
      <div className='display'>
          <div>{value}</div>
      </div>
    );
  }
}

export default Header;
