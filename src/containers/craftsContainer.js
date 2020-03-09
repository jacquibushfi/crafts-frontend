import React from 'react'
import {connect} from 'react-redux'
import {fetchCrafts} from '../actions/fetchCrafts'
import Crafts from '../components/Crafts'
import CraftInput from '../components/CraftInput'


class CraftsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchCrafts()

  }

  render() {
    return (

      <div>
        <CraftInput />
        <Crafts />
      </div>
    )

  }

}

const mapStateToProps = state => {
  return {
    crafts: state.crafts
  }
}

export default connect(mapStateToProps, {fetchCrafts})(CraftsContainer)