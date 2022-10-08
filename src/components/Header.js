import React, { Component } from 'react'
import img from '../img/iphone1.png'

export class Header extends Component {
  render() {
     let title = this.props.title
    return (
      <header>
        <div className="header_top">
            <h1>{title}</h1>
            <h2>EVERYTHING YOU NEED TO KNOW!</h2>
            <h3>Looking to learn a little bit more about what's happening with the new iPhone XS and iPhone XS Max? We've got you covered!</h3>
        </div>
        <img src={img} alt="" />
      </header>
    )
  }
}

export default Header