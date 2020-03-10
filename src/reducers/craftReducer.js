export default (state = { crafts: [], loading: false}, action) => {
  switch(action.type){

    case "FETCH_CRAFTS":
      return {
        ...state,
        crafts: [...state.crafts],
        loading: true
      }

    case "LOAD_CRAFTS":
      return {
        ...state,
        crafts: action.crafts,
        loading: false
      }

    default:
      return state 
    }
  }