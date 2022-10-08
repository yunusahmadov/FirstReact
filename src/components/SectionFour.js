import React, { Component } from 'react'
import img4 from '../img/Iphone6.png'

export class SectionFour extends Component {
  render() {
    let exceptional=this.props.exceptional

    let seven=this.props.seven
    let aerospace=this.props.aerospace
    let wireless=this.props.wireless
    return (
      <section>
        <div className="except">
            <div className="except-left" >
                <div className="except-left-top" data-aos="fade-right" data-aos-duration="1500">
                    <h2 className='exceptional'>{exceptional}</h2>
                    <p>The most durable front glass ever in a smartphone. Precision-machined, aerospace-grade aluminum bands. Water and dust resistance.And six stunning new finishes.</p>
                </div>
                <div className="except-left-bottom" data-aos="fade-right" data-aos-duration="2500">
                    <div className="except-card">
                        <h3 className='seven'>{seven}</h3>
                        <p>The beautiful finishes of the back glass are achieved using an advanced process that allows for deep, rich colors.</p>
                    </div>
                    <div className="except-card">
                        <h3 className='aerospace'>{aerospace}</h3>
                            <p>A special Apple
                                designed alloy is precision‑machined to create structural bands, and anodized to complement the color of the back glass.
                            </p>
                    </div>
                    <div className="except-card">
                        <h3 className='wireless'>{wireless}</h3>
                        <p>The glass back allows iPhone XR to charge easily and wirelessly.</p>
                    </div>
                </div>
            </div>
            <div className="except-right">
            <img data-aos="fade-left"  data-aos-duration="2500" src={img4} alt="" />
            </div>
        </div>
      </section>
    )
  }
}

export default SectionFour