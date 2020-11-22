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
        <span>1d ago</span>
        <span> &bull; </span>
        <span>Full Time</span>
        <span> &bull; </span>
        <span>USA only</span>
      </p>
      <hr className="listingDivider" />
      <div className="tagsContainer">
        <div className="tag">Frontend</div>
        <div className="tag">Senior</div>
        <div className="tag">HTML</div>
        <div className="tag">CSS</div>
        <div className="tag">Javascript</div>
      </div>
    </div>
  )
}
