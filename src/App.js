import React from 'react';
import './App.css';



class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001/crafts', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }


  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}
export default App;
