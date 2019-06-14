import React, {Component} from 'react';
import './style.css';

class Cell extends Component {
  static defaultProps = {value: 0};

  render(){
    const {
      value
    } = this.props;

    return <div className={'Cell ' + (value ? 'Cell-on' : 'Cell-off')} />
  };
}

export default Cell;
