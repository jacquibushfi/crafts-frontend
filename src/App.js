import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCrafts } from './actions/fetchCrafts'
import CraftsContainer from './containers/CraftsContainer'
import SuppliesContainer from './containers/SuppliesContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CraftInput from './components/CraftInput'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchCrafts()
  }

  render() {

    return (
      <div className="App">
        <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/crafts' component={CraftsContainer} />
          <Route exact path='/crafts/:id/supplies' component={SuppliesContainer} />
          <Route exact path='/crafts/new' component={CraftInput} />
          
        </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, {fetchCrafts})(App);
