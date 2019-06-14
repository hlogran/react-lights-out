import React, {Component} from 'react';
import Row from '../row'
import './style.css';

class Grid extends Component {
  static defaultProps = {
    values: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  };

  render() {
    const {
      values
    } = this.props;

    return (
      <div className="Grid">
        {values.map((r, i) => <Row key={i} values={r}/>)}
      </div>
    );
  }
}

export default Grid;
