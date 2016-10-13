import React, {PropTypes} from 'react';
import './FlagCell.css';


const FlagCell = (props) => {
    return (
      <div className="cell" style={{backgroundColor: props.color}} onMouseDown={props.onMouseDown}
        onMouseOver={props.onMouseOver}
        onMouseUp={props.onMouseUp}></div>
    );
}


FlagCell.propTypes = {
    color: PropTypes.string.isRequired,
    onMouseDown: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseUp: PropTypes.func
  };



export default FlagCell;