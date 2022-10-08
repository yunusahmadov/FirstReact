import React, { Component } from 'react'
import img5 from '../img/Iphone8.PNG'

export class SectionSix extends Component {
  render() {
    let other=this.props.other
    let every=this.props.every
    return (
      <section>
        <div className="other-cont">
        <img data-aos="fade-up" data-aos-duration="2500" src={img5} alt="" />
        <div className="other-cont-text" data-aos="fade-up" data-aos-duration="2500">
        <h2 className='other'>{other}</h2>
        <h3 className='every'>{every}</h3>
        </div>
        </div>
      </section>
    )
  }
}

export default SectionSix