export default (state = { crafts: [], loading: false }, action) => {
  switch (action.type) {

    case "FETCH_CRAFTS":
      return {
        ...state,
        loading: true
      }

    case "LOAD_CRAFTS":
      return {
        crafts: action.payload,
        loading: false
      }

    case "ADD_CRAFT":
      console.log("got craft to add")
      debugger
      return {
        ...state,
        loading: true
      }

    case "CRAFT_ADDED":
      console.log("added craft")
      return {
        crafts: [...state.crafts, action.payload],
        loading: false
      }

    default:
      return state
  }
}