export default (state = {supplies: [], loading: false}, action) => {
  switch(action.type){

    case "ADD_SUPPLY":
      return {
        ...state,
        loading: true
      }

      case "SUPPLY_ADDED":
        return {
        ...state,
        supplies: [...state.supplies, action.payload],
        loading: false
        }
   
    default:
      return state
  }
}