import React from 'react'
import {connect} from 'react-redux'
import Crafts from '../components/Crafts'
import CraftInput from '../components/CraftInput'


class CraftsContainer extends React.Component {

  render() {
    return (

      <div>
        <CraftInput />
        <Crafts />
      </div>
    )

  }

}

export default connect()(CraftsContainer)