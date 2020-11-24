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
        <div className="tagsContainer">
          <div data="frontend" className="tag">Frontend</div>
          <div data="senior" className="tag">Senior</div>
          <div data="html" className="tag">HTML</div>
          <div data="css" className="tag">CSS</div>
          <div data="javascript" className="tag">Javascript</div>
        </div>
      </div>
    )
  }
}
