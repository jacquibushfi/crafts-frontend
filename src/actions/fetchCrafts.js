export const fetchCrafts = () => {

  return (dispatch) => {
    dispatch({type: "FETCH_CRAFTS"})
    return fetch('/crafts')
      .then(response => response.json())
      .then(data => 
        dispatch({ type: 'LOAD_CRAFTS', payload: data }))
  }
}
