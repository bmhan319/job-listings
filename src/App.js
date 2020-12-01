import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './css/header.css'
import './css/main.css'
import './css/filter.css'
import './css/listings.css'

//A global variable array keeps a running record of the user chosen tag items
let ownTags = []

export default class App extends Component {
  state = {
    'new': 'NEW!',
    'featured': 'FEATURED',
    'json': [],
    'listings': [],
    'tags': []
  }

  //Fetches data located on the locally hosted json file and sets state with the info to load initial listings
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

  //Controls all functionality once a filter tag is clicked
  addTags = (tag) => {
    //Adjusts the UI of the site once filter component is opened
    this.openFilter()
    //Takes the clicked tag and sets it in state as an array item if it does not already exist in the array
    if (this.state.tags.indexOf(tag) === -1) {
      ownTags.push(tag)
      this.setState({
        tags: ownTags
      })
    }
    //Hides or shows only the listings that fall under chosen tag
    this.filterTag()
  }

  //Controls all functionality once a filter tag is clicked to close
  removeTags = (tag) => {
    //Creates a dupe array of the tags array located in the state
    //and removes the user chosen tag item from the array
    //then sets state with the new truncated array
    let array = [...this.state.tags]
    let index = this.state.tags.indexOf(tag)
    array.splice(index, 1)
    this.setState({tags: array})

    //does the same for the global array 
    ownTags.forEach( (tagItem,ind) => {
      if (tag === tagItem) { 
        ownTags.splice(ind, 1)
      }
    })

    //if global variable array is empty, run clearfilter function
    if (ownTags.length === 0) {
      this.clearFilter()
    }
    //otherwise sets state with new truncated array
    this.setState({
      tags: ownTags
    })
    //Hides or shows only the listings that fall under chosen tag
    this.filterTag()
  }

  //Hides or shows only the listings that fall under chosen tag
  filterTag = () => {
    let jsonArray =[]
    //runs a loop on all listings in the DOM
    this.state.json.forEach(listing => {
      //creates a temp array for each listing that contains various tag items pertinent to the listing
      let array = []
      let count = 0
      array.push(listing.role)
      array.push(listing.level)
      array.push(listing.languages.forEach( item => {array.push(item)} )) 
      array.push(listing.tools.forEach( item => {array.push(item)} )) 

      //compares global variable array and temp array to see if they contain shared tags
      //if there is a match, count is +1
      for (var i = 0; i < ownTags.length; i++) {
        for (var k = 0; k < array.length; k++) {
          if (ownTags[i] === array[k]) {count++}
        }
      }
      //if the count matches the length of the global array, it means this listing satisfies conditions imposed by all
      //tags and thus the listing should be viewable so push that listing into the json temp array
      //All other listings should be removed
      if (count === ownTags.length) {jsonArray.push(listing)}
    })
    //set state with the temp json array
    this.setState({
      'listings': jsonArray
    })
  }

  //When filter is chosen, various css styling properties turn on and off
  openFilter = () => {
    document.getElementById('filterComponent').classList.add('filterOn')
    document.getElementById('filterComponent').classList.remove('filterOff')
    document.getElementById('mainList').classList.add('mainListFilterOn')
    document.getElementById('mainList').classList.remove('mainListFilterOff')
  }

  //When filter is chosen ot close, various css styling properties turn on and off to default 
  //the state and global array gets reset 
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


