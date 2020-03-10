import React from 'react'
import { connect } from 'react-redux'
import { addCraft } from '../actions/addCraft'



class CraftInput extends React.Component {

  state = {
    name: '',
    loading: false
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.prevent.default()
    this.props.addCraft(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleOnChange}
          />
          <button type="submit">Add Craft</button>
        </form>
      </div>
    )
  }

}

export default connect(null, { addCraft })(CraftInput)