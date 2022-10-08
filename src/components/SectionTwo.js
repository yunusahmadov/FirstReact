import React, { Component } from 'react'

export class SectionTwo extends Component {
  render() {
let insides=this.props.insides
let camera=this.props.camera
let video=this.props.video
    return (
        <section className='tt'>
            <div className="section-two">
            <div className="left-container">
                <h2 className='insides' data-aos="fade-right" data-aos-duration="2000">{insides}</h2>
                <h3 data-aos="fade-right" data-aos-duration="2000">The iPhone Xs and iPhone XS Max use the new A12 Bionic chip. Both phones have a 6-core CPU and a 4-core GPU, both of which are faster and more powerful than iPhone X from last year.</h3>
                <h2 className='camera' data-aos="fade-right" data-aos-duration="3000">{camera}</h2>
                <h3 data-aos="fade-right" data-aos-duration="3000">The iPhone Xs and iPhone XS Max use the new A12 Bionic chip. Both phones have a 6-core CPU and a 4-core GPU, both of which are faster and more powerful than iPhone X from last year.</h3>
            </div>
            <div className="right-container">
            <h2 className='video' data-aos="fade-left" data-aos-duration="2000">{video}</h2>
            <h3 data-aos="fade-left" data-aos-duration="2000">The video capabilities are the same as the last year's iPhone X, meaning you can expect the iPhone XS and iPhone XS Max to have the following video specs:</h3>
            <ul >
                <li data-aos="fade-left" data-aos-duration="1000">4K video recording at 24 fps, 30 fps or 60 fps</li>
                <li data-aos="fade-left" data-aos-duration="1000">1080p HD video recording at 30 fps or 60 fps</li>
                <li data-aos="fade-left" data-aos-duration="1000">720p HD video recording at 30 fps</li>
                <li data-aos="fade-left" data-aos-duration="1000">Optical image stabilization for video</li>
                <li data-aos="fade-left" data-aos-duration="1000">Slo‑mo video support for 1080p at 120 fps or 240 fps</li>
            </ul>
            </div>
            </div>
        </section>
    )
  }
}

export default SectionTwo