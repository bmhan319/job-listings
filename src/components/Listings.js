import React, { Component } from 'react'
import logo from '../images/insure.svg'

export default class Listings extends Component {
  loadStateData = () => {
    document.querySelector('.newListing').innerHTML = (this.props.state.new === true) ? 'NEW!' : ''
    document.querySelector('.featuredListing').innerHTML = (this.props.state.featured === true) ? 'FEATURED' : ''
  }

  componentDidMount() {
    console.log(this.props.state)
    this.loadStateData()
  }

  render() {
    return (
      <div className="listingComponent">
        <div className="logoContainer">
          <img className="logoImg" src={logo} alt="insure"/>
        </div>
        <div className="topLineContainer">
          <h3 className="companyName">{this.props.state.company}</h3>
          <h2 className="newListing">a</h2>
          <h2 className="featuredListing">{this.props.state.featured}</h2>
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
