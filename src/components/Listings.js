import React, { Component } from 'react'

export default class Listings extends Component {
  render() {
    return (
      <div className="listingComponent">
        <div className="logoContainer">
          <img className="logoImg" src={this.props.state.logo} alt={this.props.state.company}/>
        </div>
        <div className="topLineContainer">
          <h3 className="companyName">{this.props.state.company}</h3>
          <h2 className="newListing displayOff">{this.props.state.new}</h2>
          <h2 className="featuredListing displayOff">{this.props.state.featured}</h2>
        </div>
        <h1 className="jobTitle">{this.props.state.position}</h1>
        <p className="jobListingInfo">
          <span className="postedDate">{this.props.state.postedAt}</span>
          <span className="bullet"> &#9679; </span>
          <span className="posContract">{this.props.state.contract}</span>
          <span className="bullet"> &#9679; </span>
          <span className="posLocation">{this.props.state.location}</span>
        </p>
        <hr className="listingDivider" />
        <ul className="tagsContainer">
          <li key="role" className="roleTag tag">{this.props.state.role}</li>
          <li key="level" className="levelTag tag">{this.props.state.level}</li>
          { this.props.state.languages.map( item => (
            <li key={item} className="languageTag tag">{item}</li>
          ))}
          { this.props.state.tools.map( item => (
            <li key={item} className="toolTag tag">{item}</li>
          ))}
          
        </ul>
      </div>
    )
  }
}
