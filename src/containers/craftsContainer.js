import React from 'react'
import {Link} from 'react-router-dom'


class CraftsContainer extends React.Component {

  

  render() {
    const craftsList = this.props.crafts.map((craft, i) =>
     <li key={i}>
       <Link to={`/crafts/${craft.id}`}>{craft.name}</Link>
     </li>)

    return (
      <div>
        <br></br>
        <h3>CRAFTS</h3>
        <ul>
          {this.props.loading ? <h3>Loading...</h3> : craftsList}
        </ul>
      </div>
    );
  }
}

export default CraftsContainer