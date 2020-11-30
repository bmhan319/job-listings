import React, { Component } from 'react'
import Filter from './Filter'
import Listings from './Listings'

export default class Main extends Component {
  render() {
    return (
      <div className="mainComponent">
        <Filter state={this.props.state}  removeTags={this.props.removeTags} clearFilter={this.props.clearFilter} />
        <ul id="mainList" className="mainList mainListFilterOff">
          {this.props.state.listings.map( item => (
            <Listings key={item.id} item={item} state={this.props.state} addTags={this.props.addTags} />
          ))}
        </ul>
      </div>
    )
  }
}

