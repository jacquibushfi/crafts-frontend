import React from 'react'
import { connect } from 'react-redux'
import SupplyInput from '../components/SupplyInput'
import Supply from '../components/Supply'


class SuppliesContainer extends React.Component {

  render() {
    //add some iff statements to check if empty
    // const craft = this.props.crafts.filter(c => c.id == this.props.match.params.id)[0]

    // // let supplylist = []
    // let supplylist = craft.supplies.map((supply, i) => <li key={i}>{supply.description}</li>)
 
    return (
      <div>
        <SupplyInput id={this.props.match.params.id} />
        <br></br>
        {/* <h3>{this.props.craft.name}</h3> */}
        <hr></hr>
        <ul>
          {/* {supplylist} */}
          <Supply crafts={this.props} />
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
