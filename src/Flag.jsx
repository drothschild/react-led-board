import React, {Component, PropTypes} from 'react';
// import './Flag.css';
import FlagCell from './FlagCell';
import { v4 } from 'uuid';

// import Pencil from './Pencil'

class Flag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      color: this.props.color
    };
  };

  blankFlag(color, width, height) {
    let flag = [];

    for (let j = 0; j < height; j++) {
      flag.push([]);
      for (let i = 0; i < width; i++) {
        flag[j].push(color);
      };
    };
    return (flag)
  };
  render() {
    let renderedFlag = this.props.flag;
    if (this.props.flag.length < this.props.width) {
    renderedFlag = this.blankFlag(this.props.color, this.props.width, this.props.height);
    };
    return (
      <div className="flag">"Flag"
      {renderedFlag.map(function(stripe) {
        return ( <div className="stripe" key={v4()}>"stripe"
          {stripe.map(function(color) {

                      return (<FlagCell color={color} key={v4()} />)
                    })}
          </div>)
          })
      }
      </div>
      )

  }
}

Flag.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  flag: PropTypes.array
  };

Flag.defaultProps = {
    width: 24,
    height: 13,
    color: 'red',
    flag: []
  };

export default Flag;