import React from 'react'


class Crafts extends React.Component {


  render() {

    const listCrafts = this.props.crafts.map((craft, i) => <li key={i}>{craft.name}</li>)
  
    return (
    <div>
      {listCrafts}
    </div>
    );
  }
}

export default Crafts;