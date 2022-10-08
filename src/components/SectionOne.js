import React, { Component } from 'react'




export class SectionOne extends Component {
  render() {
    let sectionTitle = this.props.sectionTitle
    let sectionText=this.props.sectionText
    return (
      <section>
        <div className="first-container" data-aos="fade-right" data-aos-duration="3000">
          <div className="text-container" data-aos="fade-left" data-aos-duration="3000">
          <h2>{sectionTitle}</h2>
          <p>{sectionText}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default SectionOne