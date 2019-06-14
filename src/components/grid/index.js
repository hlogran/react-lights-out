import React from 'react';
import Cell from '../cell'
import './style.css';

const Grid = (props) => {
    const {
      values,
      toggleCell
    } = props;

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

export default Grid;
