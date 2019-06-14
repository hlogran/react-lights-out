import React, {Component} from 'react';
import './style.css';

class Cell extends Component {
  static defaultProps = {
    value: 0,
    onToggle: ()=>{}
  };

  render(){
    const {
      value,
      onToggle
    } = this.props;

    return <div onClick={onToggle} className={'Cell ' + (value ? 'Cell-on' : 'Cell-off')} />
  };
}

export default Cell;
