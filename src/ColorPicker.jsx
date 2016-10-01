import React, {Component, PropTypes} from 'React'

class ColorPicker extends Component {
  constructor(props) {
    // To do: Default Colors
    super(props);
    this.state = {
      color = this.props.color;
    }
  }

  color(){
    return this.state.color;
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

export default ColorPicker;