import React from 'react'
import { connect } from 'react-redux'

class SuppliesContainer extends React.Component {

  render() {

     const name = this.props.location.state.craft.craft.name
    let supplylist = []

    supplylist = this.props.location.state.craft.craft.supplies.map((supply, i) => <li key={i}>{supply.description}</li>)

    return (
      <div>
        <br></br>
        <h3>{name}</h3>
        <hr></hr>
        <ul>
          {supplylist === [] ? '' : supplylist}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    crafts: state.craftReducer.crafts,
   }
 }

export default connect(mapStateToProps)(SuppliesContainer)
