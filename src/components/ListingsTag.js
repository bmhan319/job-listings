import React from 'react'

export default function ListingsTag(props) {
  return (
    <li data={props.state.skills[0]} className="skillsTag tag">{props.state.skills[0]}</li>
  )
}
