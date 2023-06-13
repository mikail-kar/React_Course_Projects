import React, { Component } from 'react'
import yilkarto from './yilkarto.png'

class Logo extends Component {
  render() {
    return (
      <>
        <img src={yilkarto} style={{height: "130px"}}/>
      </>
    )
  }
}

export default Logo