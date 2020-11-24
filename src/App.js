import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './css/header.css'
import './css/main.css'
import './css/listings.css'

export default class App extends Component {
  state = {
    'id': '',
    'logo': '',
    'company': '',
    'new': 'NEW!',
    'featured': 'FEATURED',
    'position': '',
    'postedAt': '',
    'contract': '',
    'location': '',
    'level': '',
    'role': '',
    'languages': [],
    'tools': [],
    'json': []
  }

  callApi = async () => {
    const header = {'Content-Type': 'application/json',
                    'Accept': 'application/json'}
    const response = await fetch( 'data.json', {headers: header} )
    const data = await response.json()

    this.setState({
      'id': data[4].id,
      'logo': '.' + data[4].logo,
      'company': data[4].company,
      'position': data[4].position,
      'postedAt': data[4].postedAt,
      'contract': data[4].contract,
      'location': data[4].location,
      'level': data[4].level,
      'role': data[4].role,
      'languages': data[4].languages,
      'tools': data[4].tools,
      'json': data
    })
    document.querySelector('.newListing').style.display = (data[4].new === true) ? "block" : "none"
    document.querySelector('.featuredListing').style.display = (data[4].featured === true) ? "block" : "none"
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
        <Main state={this.state}/>
      </div>
    )
  }
}


