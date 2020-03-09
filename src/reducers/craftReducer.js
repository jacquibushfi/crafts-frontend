export default (state = {
  crafts: [],
  loading: false},
  action) => {
  switch(action.type){
    case 'FETCH_CRAFTS':
      return {crafts: action.payload}

    default:
      return state 
    }
  }