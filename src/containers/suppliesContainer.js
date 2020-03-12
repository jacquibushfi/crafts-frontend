import React from 'react'
import { connect } from 'react-redux'
import SupplyInput from '../components/SupplyInput'


class SuppliesContainer extends React.Component {

  render() {

     const name = this.props.location.state.craft.craft.name
    
     let supplylist = []
    supplylist = this.props.location.state.craft.craft.supplies.map((supply, i) => <li key={i}>{supply.description}</li>)

    const supplypr = (supplylist === [] ? '' : supplylist)
// still working on this to return blank

    return (
      <div>
        <br></br>
        <h3>{name}</h3>
        <hr></hr>
        <ul>
          {supplypr}
        </ul>
      <SupplyInput id={this.props.match.params.id}/>
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
