import React from 'react'

function Supply(props) {

  let craft = props.crafts.crafts.filter(c => c.id == props.crafts.match.params.id)[0]

  const supplylist = craft.supplies.map((supply, i) => <li key={i}>{supply.description}</li>)

  const supplylistpr = supplylist.length === 0 ? "No Supplies" : supplylist

  return (
    <div>
      <h3>{craft.name}  Supplies</h3>
      {supplylistpr}
    </div>
  )
}

export default Supply
