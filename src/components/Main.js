import React, { Component } from 'react'
import Filter from './Filter'
import Listings from './Listings'

export default class Main extends Component {
  render() {
    return (
      <div className="mainComponent">
        <Filter state={this.props.state}/>
        <ul className="mainList">
          {this.props.state.json.map( item => (
            <Listings key={item.id} item={item} state={this.props.state}/>
          ))}
        </ul>
      </div>
    )
  }
}

