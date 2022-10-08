import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SectionOne from './components/SectionOne'


export class App extends Component {
  render() {
    return (
      <div>
        <Header title="iPhone XS and iPhone XS Max:"
        everything="EVERYTHING YOU NEED TO KNOW!" />
        <Main/>
      </div>
    )
  }
}

export default App
