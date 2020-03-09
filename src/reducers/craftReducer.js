export default (state = {
  crafts: [],
  loading: false},
  action) => {
  switch(action.type){
    case 'FETCH_CRAFTS':
      return {
        ...state,
        crafts: [...state.crafts],
        loading: true
      }

    default:
      return state 
    }
  }