import React, {Component, PropTypes} from 'react';
import './FlagCell.css';


class FlagCell extends Component {
  shouldComponentUpdate(nextProps){
    return !(this.props.color===nextProps.color)
  }

  render() {
    const styles = {backgroundColor: this.props.color};

    return (
      <div className="cell" style={styles} onMouseDown={this.props.onMouseDown}
        onMouseOver={this.props.onMouseOver}
        onMouseUp={this.props.onMouseUp}></div>
    );
  }
}


FlagCell.propTypes = {
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onMouseDown: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseUp: PropTypes.func
  };


export default FlagCell;