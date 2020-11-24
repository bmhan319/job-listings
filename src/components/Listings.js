import React, { Component } from 'react'

export default class Listings extends Component {
  displayNew = (status) => {
    if (status === true) {
      return "NEW!"
    } else {
      return ""
    }
  }

  displayFeature = (status) => {
    if (status === true) {
      return "FEATURED"
    } else {
      return ""
    }
  }
  
  componentDidMount () {
    //console.log(this.props.item)
    //console.log(this.props.state.featured)
    this.displayNew(this.props.item.new)
    //this.displayFeature(this.props.item.featured)
  }

  render() {
    return (
      <li className="listingComponent">
        <div className="logoContainer">
          <img className="logoImg" src={this.props.item.logo} alt={this.props.item.company}/>
        </div>
        <div className="topLineContainer">
          <h3 className="companyName">{this.props.item.company}</h3>
          <h2 className="newListing displayOn">{this.displayNew(this.props.item.new)}</h2>
          <h2 className="featuredListing displayOn">{this.displayFeature(this.props.item.featured)}</h2>
        </div>
        <h1 className="jobTitle">{this.props.item.position}</h1>
        <p className="jobListingInfo">
          <span className="postedDate">{this.props.item.postedAt}</span>
          <span className="bullet"> &#9679; </span>
          <span className="posContract">{this.props.item.contract}</span>
          <span className="bullet"> &#9679; </span>
          <span className="posLocation">{this.props.item.location}</span>
        </p>
        <hr className="listingDivider" />
        <ul className="tagsContainer">
          <li key={this.props.item.company + this.props.item.role} className="roleTag tag">{this.props.item.role}</li>
          <li key={this.props.item.company + this.props.item.level} className="levelTag tag">{this.props.item.level}</li>
          { this.props.item.languages.map( item => (
            <li key={this.props.item.company + item} className="languageTag tag">{item}</li>
          ))}
          { this.props.item.tools.map( item => (
            <li key={this.props.item.company + item} className="toolTag tag">{item}</li>
          ))}
          
        </ul>
      </li>
    )
  }
}
