import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'


function Craft(props) {

  return (
    <div>
     {props.crafts.map((craft, i) =>
       <li key={i}>
         <Link to={{
           pathname: `/crafts/${craft.id}/supplies`
         }}>{craft.name}</Link>
       </li>)}
    </div>
  )
}

export default connect(null)(Craft)
