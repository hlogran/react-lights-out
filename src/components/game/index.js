import React, {Component} from 'react';
import Grid from '../grid'
import './style.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHasWon: false,
      lights: this.generateRandomLights()
    };
    this.toggleCell = this.toggleCell.bind(this);
    this.restart = this.restart.bind(this);
  }

  restart(){
    const {
      playerHasWon
    } = this.state;

    if(playerHasWon) {
      this.setState({
        playerHasWon: false,
        lights: this.generateRandomLights()
      });
    }
  }

  render() {
    const {
      lights,
      playerHasWon
    } = this.state;

    if(playerHasWon){
      return (
        <div className={'Game-winner'} onClick={this.restart}>
          <span className='neon-orange'>YOU</span>
          <span className='neon-blue'>WIN!</span>
        </div>
      )
    } else {
      return (
        <div>
          <div className='Game-title'>
            <div className='neon-orange'>Lights</div>
            <div className='neon-blue'>Out</div>
          </div>
          <Grid values={lights} toggleCell={this.toggleCell}/>
        </div>
      );
    }
  }

  generateRandomLights(){
    const lights = [];
    for(let r = 0; r < 5; r++){
      lights.push([]);
      for(let c = 0; c < 5; c++){
        lights[r].push(Boolean(Math.floor(Math.random()*2)));
      }
    }
    console.log('lights', lights);
    return lights;
  }

  toggleCell(row, col){
    const {
      lights
    } = this.state;

    const newLights = lights.map((innerArray, r) => {
      if ( Math.abs(r-row)<2 ) {
        return innerArray.map((item, c) => {
          if (Math.abs(c-col)<2 && (c===col || r===row)) {
            return !item;
          } else {
            return item;
          }
        });
      } else {
        return innerArray
      }
    });

    this.setState({
      lights: newLights,
      playerHasWon: this.playerHasWon(newLights)
    });
  }

  playerHasWon(lights){
    return lights.every(row => row.every(cell => !cell));
  }
}

export default Game;
