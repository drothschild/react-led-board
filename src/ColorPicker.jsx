import React, {Component, PropTypes} from 'react'

class ColorPicker extends Component {
  constructor(props) {
    // To do: Default Colors
    super(props);
    this.setColor=this.setColor.bind(this);
  };

  setColor(event) {
    this.props.onChange(event.target.value);
  };

  render(){
    return (
      <input 
        type="text"
        value={this.props.color}
        onChange={this.setColor}
      />
      );
  };

};

  ColorPicker.propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func
  };

export default ColorPicker;