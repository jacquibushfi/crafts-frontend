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
      return <div>Loading...</div>
    } else {
      return <Crafts crafts={this.props.crafts} />
    }
  }

  render() {
    return (
      <div>
        <CraftInput />
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    crafts: state.crafts,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchCrafts })(CraftsContainer)