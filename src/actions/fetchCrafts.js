export function fetchCrafts() {

  return (dispatch) => {
    fetch('http://localhost:3001/crafts')
      .then(response => response.json())
      .then(crafts => dispatch({
        type: 'FETCH_CRAFTS',
        payload: crafts
      }))
  }
}