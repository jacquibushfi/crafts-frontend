import React from 'react'
import {connect} from 'react-redux'

function Supply(props) {

  const craft = this.props.crafts.filter(c => c.id == this.props.match.params.id)[0]

  return (
    <div>
      {craft.supplies.map((supply, i) => <li key={i}>{supply.description}</li>)}
    </div>
  )
}

export default connect(null)Supply
