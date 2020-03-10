import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCrafts } from './actions/fetchCrafts'
import CraftsContainer from './containers/CraftsContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CraftInput from './components/CraftInput'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchCrafts()
  }

  render() {
    
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/crafts/new' component={CraftInput}/>
          <Route path = '/crafts' render={(routeProps) => (<CraftsContainer {...routeProps} crafts={this.props.crafts}/>)} />
          <Route path='/' component={Home}/>
        </Switch>
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
