import React from 'react'
import CraftInput from '../components/CraftInput'
class CraftsContainer extends React.Component {

  

  render() {
    const craftsList = this.props.crafts.map((craft, i) => <li key={i}>{craft.name}</li>)

    return (
      <div>
        <h3>CRAFTS</h3>
        <CraftInput />
        <hr></hr>
       <ul>
          {this.props.loading ? <h3>Loading...</h3> : craftsList}
        </ul>
      </div>
    );
  }
}

export default CraftsContainer