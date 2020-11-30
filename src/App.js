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
    this.filterListings()
  }

  removeTags = (tag) => {
    let array = [...this.state.tags]
    let index = this.state.tags.indexOf(tag)
    array.splice(index, 1)
    this.setState({tags: array})
    if (this.state.tags.length === 1) {
      this.clearFilter()
    }
    console.log(this.state.tags)
  }

  

  filterListings = () => {
    let listings = document.querySelectorAll('.listingComponent')
    listings.forEach( listItem => {
      let array = []
      let count = 0
      array.push(listItem.dataset.role)
      array.push(listItem.dataset.level)
      array.push(listItem.dataset.languages.split(',').forEach(item=> {
        array.push(item)
      }))
      array.push(listItem.dataset.tools.split(',').forEach(item=> {
        array.push(item)
      }))
      
      this.state.tags.forEach(tag=>{      
        if (array.indexOf(tag) !== -1) {
          count++
        } else {
          count--
        }
        if (count === this.state.tags.length) {
          listItem.classList.remove('listingOff')
          listItem.classList.add('listingOn')
        } else {
          listItem.classList.remove('listingOn')
          listItem.classList.add('listingOff')
        }
      })
    })
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


