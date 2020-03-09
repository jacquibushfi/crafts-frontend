import React from 'react'
import { render } from '@testing-library/react'

class Crafts extends React.Component {
  listCrafts = () => {
    return this.props.crafts.map(craft => <li key={craft.id}>{craft.name}</li>)
  }
  

  render() {
    return (
      <div> 
        {this.listCrafts()}
      </div>
    ) 
  }
}

export default Crafts