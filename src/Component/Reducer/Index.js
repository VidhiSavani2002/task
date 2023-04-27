import commonState from './Data'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
   commonState: commonState,
})

export default rootReducer