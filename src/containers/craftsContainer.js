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
    console.log(this.props.loading)
    if(this.props.loading) {
      return <h3>Loading...</h3>
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