import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCrafts } from './actions/fetchCrafts'
import CraftsContainer from './containers/CraftsContainer'


class App extends React.Component {


  componentDidMount() {
    this.props.fetchCrafts()
  }

  render() {
    
    return (
      <div className="App">
       <CraftsContainer crafts={this.props.crafts}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    crafts: state.craftReducer.crafts,
    loading: state.craftReducer.loading
  }
}
export default connect(mapStateToProps, {fetchCrafts})(App);
