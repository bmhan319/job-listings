import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './css/header.css'
import './css/main.css'
import './css/filter.css'
import './css/listings.css'

let ownTags = []

export default class App extends Component {
  state = {
    'new': 'NEW!',
    'featured': 'FEATURED',
    'json': [],
    'listings': [],
    'tags': []
  }

  callApi = async () => {
    const header = {'Content-Type': 'application/json',
                    'Accept': 'application/json'}
    const response = await fetch( 'data.json', {headers: header} )
    const data = await response.json()

    this.setState({
      'json': data,
      'listings': data
    })
  }

  
  addTags = (tag) => {
    this.openFilter()
    if (this.state.tags.indexOf(tag) === -1) {
      ownTags.push(tag)
      this.setState({
        tags: ownTags
      })
    }
    this.filterTag()
  }

  removeTags = (tag) => {
    let array = [...this.state.tags]
    let index = this.state.tags.indexOf(tag)
    array.splice(index, 1)
    this.setState({tags: array})

    ownTags.forEach( (tagItem,ind) => {
      if (tag === tagItem) { 
        ownTags.splice(ind, 1)
      }
    })
    if (ownTags.length === 0) {
      this.clearFilter()
    }
    this.setState({
      tags: ownTags
    })
    this.filterTag()
  }

  filterTag = () => {
    let jsonArray =[]
    this.state.json.forEach(listing => {
      let array = []
      array.push(listing.role)
      array.push(listing.level)
      array.push( listing.languages.forEach(item=> {
        array.push(item)
      })) 
      array.push( listing.tools.forEach(item=> {
        array.push(item)
      })) 

      let count = 0
      for (var i = 0; i < ownTags.length; i++) {
        for (var k = 0; k < array.length; k++) {
          if (ownTags[i] === array[k]) {
            count++
          }
        }
      }
      if (count === ownTags.length) {
        jsonArray.push(listing)
      }
    })
    this.setState({
      'listings': jsonArray
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
      tags:[],
      listings: this.state.json
    })
    ownTags = []
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


