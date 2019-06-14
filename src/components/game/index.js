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
    }
    this.shuffleLights = this.shuffleLights.bind(this);

    this.shuffleLights();
  }

  render() {
    const {
      lights
    } = this.state;

    return (
      <Grid values={lights}/>
    );
  }

  shuffleLights(){
    const {
      lights
    } = this.state;

    for(let row=0; row<lights.length; row++){
      for(let col=0; col<lights[row].length; col++){
        lights[row][col] = Math.floor(Math.random()*2);
      }
    }

    this.setState({
      lights: JSON.parse( JSON.stringify(lights) )
    });
    console.log('shuffleLights');
  }
}

export default Game;
