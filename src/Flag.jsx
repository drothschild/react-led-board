import React, {Component, PropTypes} from 'react';
// import './Flag.css';
import FlagCell from './FlagCell';


// import Pencil from './Pencil'

class Flag extends Component {
  constructor(props) {
    super(props);
    this.newFlag=this.newFlag.bind(this);
    this.updateCell= this.updateCell.bind(this);
    this.state = {
      dragging: false,
      color: this.props.color,
      flag: this.props.flag || this.newFlag(this.props.color, this.props.width, this.props.height)
    };
  };

  newFlag(color, width, height) {
    let flag = [];

    for (let i = 0; i < height; i++) {
      flag.push([]);
      for (let j = 0; j < width; j++) {
        flag[i].push(color);
      };
    };
    return flag;
  };

  updateCell(color, i, j) {
    let flag = this.state.flag;
    flag[i][j] = color;
    this.setState ({
      flag: flag
    });
  }

  drawFlag(flag) {
    const tempContext = this
    var htmlFlag= flag.map(function(stripe, i) {

        return ( <div className="stripe" key={i}>"tempContext"
          {stripe.map((color, j ) => {
                       var handleClick = tempContext.updateCell.bind(tempContext, "blue", i, j);  
                      return (
                        <FlagCell 
                        color={color} 
                        key={i + " " + j}
                        id={i + " " + j}
                        onClick={handleClick}
                        />
                    )})}
          </div>)
          });
    return htmlFlag
  }

  render() {
    return (
      <div className="primary-flag">"Flag"
        {this.drawFlag(this.state.flag)}
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
    color: 'grey',
  };

export default Flag;