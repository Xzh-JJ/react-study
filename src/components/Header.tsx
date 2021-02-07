import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="input">
        <input type="text" placeholder="备忘录在此输入" />
      </div>
    )
  }
}

