import React, {Component} from 'react';
import Cell from '../cell'
import './style.css';

class Row extends Component {
  static defaultProps = {values: [0, 0, 0, 0, 0]};

  render() {
    const {
      values
    } = this.props;

    return (
      <div className="Row">
        { values.map((v, i) => <Cell key={i} value={v} />) }
      </div>
    );
  }
}

export default Row;
