import React, {Component} from 'react';
import Grid from '../grid'
import './style.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]
    };
    this.shuffleLights = this.shuffleLights.bind(this);
    this.toggleCell = this.toggleCell.bind(this);

  }

  componentDidMount(){
    this.shuffleLights();
  }

  render() {
    const {
      lights
    } = this.state;

    return (
      <Grid values={lights} toggleCell={this.toggleCell}/>
    );
  }

  shuffleLights(){
    const {
      lights
    } = this.state;

    const newLights = lights.map((innerArray, r) => {
      return innerArray.map((item, c) => {
        return Math.floor(Math.random()*2);
      });
    });

    this.setState({ lights: newLights });
  }

  toggleCell(row, col){
    const {
      lights
    } = this.state;

    const newLights = lights.map((innerArray, r) => {
      if ( Math.abs(r-row)<2 ) {
        return innerArray.map((item, c) => {
          if (Math.abs(c-col)<2) {
            return !item
          } else {
            return item;
          }
        });
      } else {
        return innerArray
      }
    });

    this.setState({ lights: newLights });
  }
}

export default Game;
