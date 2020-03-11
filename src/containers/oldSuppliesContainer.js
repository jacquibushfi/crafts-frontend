import React from 'react'
import { connect } from 'react-redux'


class SuppliesContainer extends React.Component {

  supplies = (craft, supplyList) => {
    {
      if (supplyList.length > 0) {
        return (<div><h3>craft.name</h3>
      supplyList</div> )
      } else {
        return "No supplies"
      }
    }
  }

  render() {
    let supplyList = []
    console.log(this.props.match.params.id)
    const craft = this.props.crafts.filter(c => this.props.match.params.id == c.id)[0]
    debugger
    if (craft && craft.supplies.length > 0) {
      supplyList = craft.supplies.map((supply, i) =>
        <li key={i}>
          {supply.description}
        </li>)
    }

    return (
      <div>
        <br></br>
{/* pick which function to render or  */}
        <h3>Supplies</h3>
        <hr></hr>
        <ul>
          {this.supplies(craft, supplyList)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // crafts: state.craftReducer.crafts.filter....to get the match params
    // instead of crafts - use filter to get the craft for this.props.craft
    // second key called has supploes set to true if there are supplies or false or not
  }
}


export default connect(mapStateToProps)(SuppliesContainer)
