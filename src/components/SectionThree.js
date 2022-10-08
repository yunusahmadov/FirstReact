import React, { Component } from 'react'
import img from '../img/Iphone3.png'
import img2 from '../img/Iphone4.png'
import img3 from '../img/Iphone5.png'

export class SectionThree extends Component {
  render() {
    let xsmax=this.props.xsmax
    let xsmaxDisplay=this.props.xsmaxDisplay
    let xs=this.props.xs
    let xsDisplay=this.props.xsDisplay
    let xr=this.props.xr
    let xrDisplay=this.props.xrDisplay
    return (
      <section>
        <div className="three-phones">
            <div className="card" data-aos="fade-right" data-aos-duration="2500">
            <img src={img} alt="" />
            <h2 className='xsmax'>{xsmax}</h2>
            <h3 className='xsmaxDisplay'>{xsmaxDisplay}</h3>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="2500">
            <img src={img2} alt="" />
            <h2 className='xs'>{xs}</h2>
            <h3 className='xsDisplay'>{xsDisplay}</h3>
            </div>
            <div className="card" data-aos="fade-left" data-aos-duration="2500">
            <img src={img3} alt="" />
            <h2 className='xr'>{xr}</h2>
            <h3 className='xrDisplay'>{xrDisplay}</h3>
            </div>
        </div>
      </section>
    )
  }
}

export default SectionThree