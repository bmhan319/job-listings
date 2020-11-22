import React, { Component } from 'react'
import Listings from './Listings'

export default class Main extends Component {
  render() {
    return (
      <div className="mainComponent">
        <Listings state={this.props.state}/>
      </div>
    )
  }
}

