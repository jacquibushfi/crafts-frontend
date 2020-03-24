import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class CraftCard extends Component {

  state = {
    likes: 0
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { likes: prevState.likes + 1 }
    })
  }

  render() {
    return (
      <div>
        <li>
          <Link to={{
            pathname: `/crafts/${this.props.craft.id}/supplies`
          }}>{this.props.craft.name}</Link>
          <button onClick={this.handleClick}>Likes({this.state.likes})</button>
        </li>
      </div>
    )
  }
}

export default CraftCard
