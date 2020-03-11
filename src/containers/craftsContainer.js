import React from 'react'
import { Link } from 'react-router-dom'
import { fetchCrafts } from '../actions/fetchCrafts'
import { connect } from 'react-redux'

class CraftsContainer extends React.Component {

   render() {
    const craftsList = this.props.crafts.map((craft, i) =>
      <li key={i}>
        <Link to={`/crafts/${craft.id}`}>{craft.name}</Link>
      </li>)
    return (
      <div>
        <br></br>
        <h3>CRAFTS</h3>
        <h5>Select a craft to see the supplies</h5>
        <ul>
          {this.props.loading ? <h3>Loading...</h3> : craftsList}
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

export default connect(mapStateToProps, {fetchCrafts})(CraftsContainer)