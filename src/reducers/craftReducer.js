// export default (state = { crafts: [], loading: false }, action) => {
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

      case "ADD_SUPPLY":
      return {
        ...state,
        loading: true
      }

      case "SUPPLY_ADDED":
        // filter the craft for the payload id to find the craft
        let craft = state.crafts.filter(c => c.id === action.payload.craft_id)[0]
        let newcraft = {
          ...craft, 
          supplies: [...craft.supplies, action.payload]}
        let crafts = state.crafts.filter(c => c.id !== action.payload.craft_id)

        return {
        ...state,
        crafts: [...crafts, newcraft],
        loading: false
        }
   

    default:
      return state
  }
}