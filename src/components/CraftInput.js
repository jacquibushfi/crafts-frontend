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

  handleSubmit = event => {
    event.preventDefault()
    this.props.addCraft(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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