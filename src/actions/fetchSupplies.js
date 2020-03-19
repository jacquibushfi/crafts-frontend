export const addSupply = (supply, id) => {

  return (dispatch) => {
    dispatch({ type: "ADD_SUPPLY" }, supply)
    return fetch(`/crafts/${id}/supplies`, {
      method: "POST",
      body: JSON.stringify(supply),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status)
        else return response.json()
      })
      .then(supply => {
        return dispatch({ type: "SUPPLY_ADDED", payload: supply })
      })
      .catch((error) => {
        alert(`${error} Error creating new supply. Description is Required`)
      })
  }
}