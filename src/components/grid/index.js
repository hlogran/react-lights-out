import React, {Component} from 'react';
import Cell from '../cell'
import './style.css';

class Grid extends Component {
  static defaultProps = {
    toggleCell: ()=>{},
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
      values,
      toggleCell
    } = this.props;

    return (
      <div className="Grid">
        {values.map((r, row) => {
          return (
            <div key={row} className="Grid-row">
              { r.map((v, col) => {
                return (
                  <Cell
                    key={col}
                    value={v}
                    onToggle = {toggleCell.bind(this, row, col)}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Grid;
