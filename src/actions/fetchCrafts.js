export function fetchCrafts() {

  return (dispatch) => {
    fetch('http://localhost:3001/crafts')
      .then(response => {
        return response.json()
      }).then(data => {
        dispatch({ type: 'FETCH_CRAFTS', crafts: data.crafts })
      })
  }
}