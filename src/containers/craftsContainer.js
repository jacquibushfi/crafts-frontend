import React from 'react'
import { fetchCrafts } from '../actions/fetchCrafts'
import { connect } from 'react-redux'
import Craft from '../components/Craft'

class CraftsContainer extends React.Component {
  
  
  
  render() {

    return (
      <div>
        <br></br>
        <h3>CRAFTS</h3>
        <h5>Select a craft to see the supplies</h5>
        <ul>
          {this.props.loading ? <h3>Loading...</h3> :
          <Craft crafts={this.props.crafts} />
         }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    crafts: state.craftReducer.crafts,
    loading: state.craftReducer.loading
  }
}

export default connect(mapStateToProps, { fetchCrafts })(CraftsContainer)