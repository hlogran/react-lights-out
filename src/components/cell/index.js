import React, {Component} from 'react';
import './style.css';

const Cell = (props) => {
  const {
    value,
    onToggle
  } = props;

  return <div onClick={onToggle} className={'Cell ' + (value ? 'Cell-on' : 'Cell-off')} />
};

export default Cell;
