import React, {Component} from 'react';
import Row from '../row'
import './style.css';

class Grid extends Component {
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
  }

  render() {
    const {
      lights
    } = this.state;

    return (
      <div className="Grid">
        {lights.map((r, i) => <Row key={i} values={r}/>)}
      </div>
    );
  }
}

export default Grid;
