import React from 'react'
import { connect } from 'react-redux'
import { addSupply } from '../actions/fetchSupplies'

class SupplyInput extends React.Component {

  state = {
    description: '',
    vendor: '',
    price: '',
    craft_id: '',
    loading: false
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addSupply(this.state, this.props.id)
    this.setState({
      description: '',
      vendor: '',
      price: ''

      // ask about this
    })
  }
  render() {
    return (
      <div>
        <br></br>
        <h3>New Supplies</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Description:</label>
          <input
            type="text"
            value={this.state.description}
            name="description"
            onChange={this.handleOnChange}
          /><br></br>
          <label>Vendor:</label>
          <input
            type="text"
            value={this.state.vendor}
            name="vendor"
            onChange={this.handleOnChange}
          /><br></br>
          <label>Price:</label>
          <input
            type="float"
            value={this.state.price}
            name="price"
            onChange={this.handleOnChange}
          /><br></br>
          <input
            type="hidden"
            value={this.props.id}
            name="craft_id"
            onChange={this.handleOnChange}
          />

          <button type="submit">Add Craft</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addSupply })(SupplyInput)
