import React, {Component, PropTypes} from 'react'

class ColorPicker extends Component {
  constructor(props) {
    // To do: Default Colors
    super(props);
    this.setColor=this.setColor.bind(this);
    this.state = {
      color: this.props.color
    }
  }

  color(){
    return "blue";
  };

  setColor(event) {
    this.setState({color: event.target.value});
  };

  render(){
    return (
      <input 
        type="text"
        value={this.state.color}
        onChange={this.setColor}
      />
      );
  }

};

  ColorPicker.propTypes = {
    color: PropTypes.string
    onChange: PropTypes.func
  };

export default ColorPicker;