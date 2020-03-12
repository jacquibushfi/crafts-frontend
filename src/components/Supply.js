import React from 'react'
import {connect} from 'react-redux'

function Supply(props) {

  let craft = props.crafts.crafts.filter(c => c.id == props.crafts.match.params.id)[0]

  return (
    <div>
      <h3>{craft.name}</h3>
      {craft.supplies.map((supply, i) => <li key={i}>{supply.description}</li>)}
    </div>
  )
}

export default connect(null)(Supply)
