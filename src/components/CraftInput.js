import React from 'react'
import {connect} from 'react-redux'
import {addCraft} from '../actions/addCraft'



class CraftInput extends React.Component {

  state = {
    name: "",
    loading: false
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.prevent.default()
    const craft = {...this.state}
    this.props.addCraft(craft)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value ={this.state.name}
            onChange={this.handleOnChange}
            />
            <button type="submit">Add Craft</button>
        </form>
      </div>
)

  }
}

export default connect(null, {addCraft})(CraftInput)