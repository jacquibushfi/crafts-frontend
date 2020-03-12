export const addSupply = (supply, id) => {
 
  return (dispatch) => {
    dispatch({ type: "ADD_SUPPLY" }, supply)
    return fetch (`/crafts/${id}/supplies`, {
      method: "POST",
      body: JSON.stringify(supply),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(craft => {
        return dispatch({ type: "SUPPLY_ADDED", payload: supply })
      })

  }
}