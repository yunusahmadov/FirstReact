import React, { Component } from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'

export class Main extends Component {
  render() {
    return (
      <main>
        <SectionOne
          sectionTitle="What's the difference between the iPhone XS and iPhone XS Max?"
          sectionText="iPhone XS has a 5.8-inch OLED display and the iPhone XS Max has a 6.5-inch OLED display, meaning the iPhone Xs Max is larger; however, other than that, there is no difference between the two new phones on the inside."
        />
        <SectionTwo
          insides="The Insides"
          camera="The Camera"
          video="The Video"
        />
        <SectionThree
        xsmax="iPhone Xs Max"
        xsmaxDisplay="6.5″ display1"
        xs="iPhone Xs"
        xsDisplay="5.8″ display1"
        xr="iPhone Xr"
        xrDisplay="6.1″ display1"
        />
        <SectionFour
        exceptional="Exceptional materials"
        seven="Seven-layer color process"
        aerospace="Aerospace-grade aluminum bands"
        wireless="Wireless charging"
        />
        <SectionFive  
        faceid="Advanced Face ID"
        security="SECURITY IS SIMPLE WHEN YOUR FACE IS YOUR PASSWORD."
        />
        <SectionSix
        other="No other phone is like iPhone"
        every="EVERY DECISION THAT GOES INTO IPHONE MAKES IT STAND APART"
        />
        <SectionSeven/>
      </main>
    )
  }
}

export default Main