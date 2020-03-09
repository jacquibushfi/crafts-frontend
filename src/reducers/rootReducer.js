import {combineReducers} from 'redux'
import craftReducer from './craftReducer'
import supplyReducer from './supplyReducer'

const rootReducer = combineReducers({
  craftReducer,
  supplyReducer
})

export default rootReducer