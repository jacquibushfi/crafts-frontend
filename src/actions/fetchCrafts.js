export function fetchCrafts() {

  return (dispatch) => {
    dispatch({ type: "FETCH_CRAFTS"})
    fetch('http://localhost:3001/crafts')
     .then(response => {
        return response.json()
      }).then(data => {
        dispatch({ type: 'LOAD_CRAFTS', crafts: data.crafts })
      })
    }
  }



  