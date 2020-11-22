import React from 'react'
import logo from '../images/insure.svg'

export default function Listings(props) {
  return (
    <div className="listingComponent">
      <div className="logoContainer">
        <img className="logoImg" src={logo} alt="insure"/>
      </div>
      <div className="topLineContainer">
        <h3 className="companyName">{props.state.company}</h3>
        <h2 className="newListing">{props.state.new}!</h2>
        <h2 className="featuredListing">{props.state.featured}</h2>
      </div>
      <h1 className="jobTitle">{props.state.position}</h1>
      <p className="jobListingInfo">
        <span className="postedDate">{props.state.postedAt}</span>
        <span className="bullet"> &#9679; </span>
        <span className="posContract">{props.state.contract}</span>
        <span className="bullet"> &#9679; </span>
        <span className="posLocation">{props.state.location}</span>
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