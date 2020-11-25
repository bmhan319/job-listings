import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './css/header.css'
import './css/main.css'
import './css/filter.css'
import './css/listings.css'

export default class App extends Component {
  state = {
    'new': 'NEW!',
    'featured': 'FEATURED',
    'json': [],
    'tags': []
  }

  callApi = async () => {
    const header = {'Content-Type': 'application/json',
                    'Accept': 'application/json'}
    const response = await fetch( 'data.json', {headers: header} )
    const data = await response.json()

    this.setState({
      'json': data
    })
  }

  addTags = (tag) => {
    this.openFilter()
    if (this.state.tags.indexOf(tag) === -1) {
      this.setState({
        tags:[...this.state.tags, tag]
      })
    }
    this.filterListings(tag)
  }

  removeTags = (tag) => {
    let array = [...this.state.tags]
    let index = this.state.tags.indexOf(tag)
    array.splice(index, 1)
    this.setState({tags: array})
    if (this.state.tags.length === 1) {
      this.clearFilter()
    }
    this.undoFilterListings(tag)
  }

  openFilter = () => {
    document.getElementById('filterComponent').classList.add('filterOn')
    document.getElementById('filterComponent').classList.remove('filterOff')
    document.getElementById('mainList').classList.add('mainListFilterOn')
    document.getElementById('mainList').classList.remove('mainListFilterOff')
  }

  clearFilter = () => {
      document.querySelector('.filterComponent').classList.add('filterOff')
      document.querySelector('.filterComponent').classList.remove('filterOn')
      document.getElementById('mainList').classList.add('mainListFilterOff')
      document.getElementById('mainList').classList.remove('mainListFilterOn')
      this.setState({
        tags:[]
      })
  }

  filterListings = (tag) => {
    let listings = document.querySelectorAll('.listingComponent')
    
    listings.forEach( item => {
      //console.log(item.dataset.role)
      //console.log(item)
      //console.log('tag', tag)
      if (tag === item.dataset.role) {
        item.classList.remove('listingOff')
        item.classList.add('listingOn')
      } else {
        item.classList.remove('listingOn')
        item.classList.add('listingOff')
      }
    })
  }

  undoFilterListings = (tag) => {
    let listings = document.querySelectorAll('.listingComponent')
    console.log(tag)

    listings.forEach( item => {
      if (tag === item.dataset.role) {
        item.classList.remove('listingOff')
        item.classList.add('listingOn')
      } else {
        item.classList.remove('listingOff')
        item.classList.add('listingOn')
      }
    })
  }

  componentDidMount () {
    window.onload = () => {
      this.callApi()
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main state={this.state} addTags={this.addTags} removeTags={this.removeTags} clearFilter={this.clearFilter}/>
      </div>
    )
  }
}


