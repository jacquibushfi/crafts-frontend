import React from 'react'
import CraftCard from './CraftCard'

function Craft(crafts) {

  const craftlist = crafts.crafts.map((craft, i) => <CraftCard craft={craft} key={craft.id} />)
   

  const craftlistpr = craftlist.length === 0 ? "No Crafts" : craftlist

  return (
    <div>
      {craftlistpr}
    </div>
  )
}

export default Craft
