import React from 'react'

export default function Filter(props) {
  return (
    <div id="filterComponent" className="filterComponent filterOff">
        <div className="filterContainer">
          <ul className="filterTagsList">
            { props.state.tags.map ( (item) => (
              <li key={item} id={item} className="filterTag">
                <div className="filterTagText">{item}</div>
                <div className="filterTagDelete" onClick={()=>{props.removeTags(item)}} >
                  <img src='./images/icon-remove.svg' alt="remove icon" className="closeTagIcon"/>
                </div>
              </li>
            ))}
          </ul>
          <div className="filterClearContainer" onClick={props.clearFilter} >
            <p className="filterClearText">Clear</p>
          </div>
        </div>
    </div>
  )
}
