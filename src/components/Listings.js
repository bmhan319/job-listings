import React from 'react'
import photosnap from '../img/photosnap.svg'

export default function Listings() {
  return (
    <div className="listingComponent">
      <div className="logoContainer">
        <img className="logoImg" src={photosnap} alt="insure"/>
      </div>
      <div className="topLineContainer">
        <h3 className="companyName">Photsnap</h3>
        <h2 className="newListing">NEW!</h2>
        <h2 className="featuredListing">FEATURED</h2>
      </div>
      <h1 className="jobTitle">Senior Frontend Developer</h1>
      <p className="jobListingInfo">
        <span className="postedDate">1d ago</span>
        <span className="bullet"> &#9679; </span>
        <span className="posType">Full Time</span>
        <span className="bullet"> &#9679; </span>
        <span className="posLocation">USA only</span>
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
