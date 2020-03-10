import React from 'react'
import { connect } from 'react-redux'
import { fetchCrafts } from '../actions/fetchCrafts'
import Crafts from '../components/Crafts'
import CraftInput from '../components/CraftInput'


class CraftsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchCrafts()
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <h3>Loading...</h3>
    } else {
      return <Crafts crafts={this.props.crafts} />
    }
  }

  render() {
    return (
      <div>
        <h3>Create Craft</h3>
        <CraftInput />
        <h3>Crafts</h3>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("I am state", state)
  return {
    crafts: state.craftReducer.crafts,
    loading: state.craftReducer.loading
  }
}

export default connect(mapStateToProps, { fetchCrafts })(CraftsContainer)