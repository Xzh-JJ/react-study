import { Component } from 'react';
import Item from './Item';
class List extends Component {
  render() {
    return (
      <div className="list">
        <Item />
      </div>
    )
  }
}

export default List