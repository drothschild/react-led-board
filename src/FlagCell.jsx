import React, {Component, PropTypes} from 'react';

import './FlagCell.css';


class FlagCell extends Component {
  shouldComponentUpdate(nextProps){
    return !(this.props.color===nextProps.color)
  }

  render() {
    const styles = {backgroundColor: this.props.color};

    return (
      <span style={styles}>C</span>
    );
  }
}


FlagCell.propTypes = {
    color: PropTypes.string.isRequired
  };


export default FlagCell;