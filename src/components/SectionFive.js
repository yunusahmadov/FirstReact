import React, { Component } from 'react'

export class SectionFive extends Component {
  render() {
    let faceid=this.props.faceid
    let security=this.props.security
    return (
      <section>
        <div className="advanced">
            <div className="advanced-text">
                <h2 data-aos="fade-right" data-aos-duration="1500" className='faceid'>{faceid}</h2>
                <h3 data-aos="fade-right" data-aos-duration="1500" className='security'>{security}</h3>
                <p  data-aos="fade-right" data-aos-duration="1500">You can unlock your iPhone, log in to apps, and pay for things with a glance. It’s the most secure facial authentication ever in a smartphone. And now it’s even faster.</p>
            </div>
        </div>
      </section>
    )
  }
}

export default SectionFive