import React from 'react'

function Supply(crafts) {

  let craft = crafts.crafts.crafts.filter(c => c.id == crafts.crafts.match.params.id)[0]

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
