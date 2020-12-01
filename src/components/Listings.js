import React, { Component } from 'react'

export default class Listings extends Component {
  displayNew = (status) => {
    document.getElementById(`new${this.props.item.id}`).style.display = (status === true) ? "block" : "none"
  }

  displayFeature = (status) => {
    document.getElementById(`featured${this.props.item.id}`).style.display = (status === true) ? "block" : "none"
    document.getElementById(`listingComponent${this.props.item.id}`).style.borderLeft = (status === true) ? "5px solid var(--DarkCyan)" : "0"
  }


  
  componentDidMount () {
    this.displayNew(this.props.item.new)
    this.displayFeature(this.props.item.featured)
  }

  render() {
    return (
      <li id={`listingComponent${this.props.item.id}`} className="listingComponent listingOn" data-role={this.props.item.role} data-level={this.props.item.level} data-languages={this.props.item.languages} data-tools={this.props.item.tools} >
        <div className="logoContainer">
          <img className="logoImg" src={this.props.item.logo} alt={this.props.item.company}/>
        </div>
        <div className="desktopContainer">
          <div className="desktopLeft">
            <div className="topLineContainer">
              <h3 className="companyName">{this.props.item.company}</h3>
              <h2 id={`new${this.props.item.id}`} className='specialListing newListing'>NEW!</h2>
              <h2 id={`featured${this.props.item.id}`} className='specialListing featuredListing' >FEATURED</h2>
            </div>
            <h1 className="jobTitle">{this.props.item.position}</h1>
            <p className="jobListingInfo">
              <span className="postedDate">{this.props.item.postedAt}</span>
              <span className="bullet"> &#9679; </span>
              <span className="posContract">{this.props.item.contract}</span>
              <span className="bullet"> &#9679; </span>
              <span className="posLocation">{this.props.item.location}</span>
            </p>
          </div>
          <hr className="listingDivider" />
          <div className="desktopRight">
            <ul className="tagsContainer">
              <li key={this.props.item.company + this.props.item.role}  onClick={()=>{this.props.addTags(this.props.item.role)}} data-tag={this.props.item.role} className={`roleTag tag ${this.props.item.role}`}>{this.props.item.role}</li>
              <li key={this.props.item.company + this.props.item.level} onClick={()=>{this.props.addTags(this.props.item.level)}} data-tag={this.props.item.level} className={`levelTag tag ${this.props.item.level}`}>{this.props.item.level}</li>
              { this.props.item.languages.map( item => (
                <li key={this.props.item.company + item} onClick={()=>{this.props.addTags(item)}} data-tag={item} className={`languageTag tag ${item}`}>{item}</li>
              ))}
              { this.props.item.tools.map( item => (
                <li key={this.props.item.company + item} onClick={()=>{this.props.addTags(item)}} data-tag={item} className={`toolTag tag ${item}`}>{item}</li>
              ))}
              
            </ul>
          </div>
        </div>
      </li>
    )
  }
}
