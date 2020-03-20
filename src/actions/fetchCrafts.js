export const fetchCrafts = () => {

  return (dispatch) => {
    dispatch({type: "FETCH_CRAFTS"})
    return fetch('/crafts')
      .then(response => response.json())
      .then(data => 
        dispatch({ type: 'LOAD_CRAFTS', payload: data }))
  }
}

export const addCraft = (craft) => {

  return (dispatch) => {
    dispatch({ type: "ADD_CRAFT" }, craft)
    return fetch('/crafts', {
      method: "POST",
      body: JSON.stringify(craft),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if(!response.ok) {throw response}
        else return response.json()
      })
      .then(craft => {
        return dispatch({ type: "CRAFT_ADDED", payload: craft })
      })
      .catch((error) => {
        error.text().then(errorMessage => {
          alert(errorMessage)
        })
      })
  }
}