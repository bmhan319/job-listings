import React, { Component } from 'react'
import Listings from './Listings'

export default class Main extends Component {
  render() {
    return (
      <ul className="mainComponent">
        {this.props.state.json.map( item => (
          <Listings key={item.id} item={item} state={this.props.state}/>
        ))}
      </ul>
    )
  }
}

