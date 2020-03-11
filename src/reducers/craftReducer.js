export default (state = { crafts: [], loading: false }, action) => {
  switch (action.type) {

    case "FETCH_CRAFTS":
      return {
        ...state,
        loading: true
      }

    case "LOAD_CRAFTS":
         return {
        ...state,
        crafts: action.payload,
        loading: false
      }

    case "ADD_CRAFT":
      return {
        ...state,
        loading: true
      }

    case "CRAFT_ADDED":
      return {
        ...state,
        crafts: [...state.crafts, action.payload],
        loading: false
      }

    default:
      return state
  }
}