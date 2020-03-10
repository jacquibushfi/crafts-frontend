import React from 'react'
import { NavLink } from 'react-router-dom'

const lnkstyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  paddingRight: '20px',
}

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={{ lnkstyle }}
        >Home</NavLink>

        <NavLink
          to="/crafts"
          exact
          style={{ lnkstyle }}
        >Crafts</NavLink>

        <NavLink
          to="/crafts/new"
          exact
          style={{ lnkstyle }}
        >New Craft</NavLink>
      </div>
    )
  }
};

export default NavBar;
