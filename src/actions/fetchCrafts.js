export function fetchCrafts() {

  return (dispatch) => {
    fetch('http://localhost:3001/crafts')
      .then(response => response.json())
      .then(data => dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: crafts
      }))
  }
}