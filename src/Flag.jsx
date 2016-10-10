import React, {Component, PropTypes} from 'react';
// import './Flag.css';
import FlagCell from './FlagCell';
class Flag extends Component {
  constructor(props) {
    super(props);
    this.newFlag=this.newFlag.bind(this);
    this.updateCell= this.updateCell.bind(this);
    this.state = {
      dragging: false,
      color: this.props.color,
      flag: this.props.flag || this.newFlag("white", this.props.width, this.props.height)
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

 onMouseDown(i,j){
  this.updateCell(i,j);
  this.setState({
    dragging:true
  })
 } 
 onMouseOver(i,j){
    if (this.state.dragging)
    {
      this.updateCell(i,j)
    } 
   }

  onMouseUp(i,j){
    this.setState({
      dragging:false
    })
   } 

  updateCell(i, j) {
    let flag = this.state.flag;
    flag[i][j] = this.props.color;
    this.setState ({
      flag: flag
    });
  }

  drawFlag(flag) {
    const tempContext = this;
    var htmlFlag = flag.map((stripe, i) => {

        return ( <div className="stripe" key={i}>
          {stripe.map((color, j) => {
                       const handleDown = tempContext.onMouseDown.bind(tempContext,i, j);
                       const handleOver = tempContext.onMouseOver.bind(tempContext,i, j);
                       const handleUp = tempContext.onMouseUp.bind(tempContext,i, j);    
                      if (tempContext.props.editable){
                        return (
                        <FlagCell 
                        color={color} 
                        key={i + " " + j}
                        id={i + " " + j}
                        onMouseDown={handleDown}
                        onMouseOver={handleOver}
                         onMouseUp={handleUp}
                        />
                    ) }
                      else {
                        return (
                        <FlagCell 
                        color={color} 
                        key={i + " " + j}
                        id={i + " " + j}
                        />
                    )}
                    })}
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
  flag: PropTypes.array,
  editable: PropTypes.bool
  };

Flag.defaultProps = {
    width: 24,
    height: 13
  };

export default Flag;