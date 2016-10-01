import React, {Component, PropTypes} from 'react';

import './FlagCell.css';


class FlagCell extends Component {
  shouldComponentUpdate(nextProps){
    return !(this.props.color===nextProps.color)
  }

  render() {
    const classString = this.props.color;

    return (
      <span className={classString}>cell</span>
    );
  }
}


FlagCell.propTypes = {
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };


export default FlagCell;