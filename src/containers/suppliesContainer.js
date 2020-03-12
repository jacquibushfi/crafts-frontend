import React from 'react'
import { connect } from 'react-redux'
import SupplyInput from '../components/SupplyInput'
import Supply from '../components/Supply'


class SuppliesContainer extends React.Component {

  render() {
  
    return (
      <div>
        <SupplyInput id={this.props.match.params.id} />
        <br></br>
        <hr></hr>
        <ul>
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
