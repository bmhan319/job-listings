import React from 'react'

export default function Filter(props) {
  return (
    <div id="filterComponent" className="filterComponent filterOff">
        <div className="filterContainer">
          <ul className="filterTagsList">
            <li className="filterTag">
              <div className="filterTagText">FrontEnd</div>
              <div className="filterTagDelete">
                <img src='./images/icon-remove.svg' alt="remove icon" className="src"/>
              </div>
            </li>
            <li className="filterTag">
              <div className="filterTagText">CSS</div>
              <div className="filterTagDelete">
                <img src='./images/icon-remove.svg' alt="remove icon" className="src"/>
              </div>
            </li>
            <li className="filterTag">
              <div className="filterTagText">JavaScript</div>
              <div className="filterTagDelete">
                <img src='./images/icon-remove.svg' alt="remove icon" className="src"/>
              </div>
            </li>
          </ul>
          <div className="filterClearContainer">
            <p className="filterClearText">Clear</p>
          </div>
        </div>
    </div>
  )
}
