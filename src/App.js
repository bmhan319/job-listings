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
    'languages': [],
    'level': '',
    'role': '',
    'tools': []
  }

  callApi = async () => {
    const header = {'Content-Type': 'application/json',
                    'Accept': 'application/json'}
    const response = await fetch( 'data.json', {headers: header} )
    const data = await response.json()

    this.setState({
      'id': data[0].id,
      'logo': '.' + data[0].logo,
      'company': data[0].company,
      'position': data[0].position,
      'postedAt': data[0].postedAt,
      'contract': data[0].contract,
      'location': data[0].location,
      'languages': data[0].languages,
      'level': data[0].level,
      'role': data[0].role,
      'tools': data[0].tools
    })
    document.querySelector('.newListing').style.display = (data[0].new === true) ? "block" : "none"
    document.querySelector('.featuredListing').style.display = (data[0].featured === true) ? "block" : "none"
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


