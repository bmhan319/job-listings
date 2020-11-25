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

  bean = []

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
  }

  openFilter = () => {
    document.getElementById('filterComponent').classList.add('filterOn')
    document.getElementById('filterComponent').classList.remove('filterOff')
    document.getElementById('mainList').classList.add('mainListFilterOn')
    document.getElementById('mainList').classList.remove('mainListFilterOff')
  }

  closeFilter = () => {
    
      document.querySelector('.filterComponent').classList.add('filterOff')
      document.querySelector('.filterComponent').classList.remove('filterOn')
      document.getElementById('mainList').classList.add('mainListFilterOff')
      document.getElementById('mainList').classList.remove('mainListFilterOn')
    
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
        <Main state={this.state} addTags={this.addTags} />
      </div>
    )
  }
}


