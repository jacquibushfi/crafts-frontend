import React from 'react'
import { Link } from 'react-router-dom'

function Craft(props) {

  const craftlist = props.crafts.map((craft, i) =>
    <li key={i}>
      <Link to={{
        pathname: `/crafts/${craft.id}/supplies`
      }}>{craft.name}</Link>
    </li>)

  const craftlistpr = craftlist.length === 0 ? "No Crafts" : craftlist

  return (
    <div>
      {craftlistpr}
    </div>
  )
}

export default Craft
