import changeNumber from './Red'
import changeItemNumber from './RedShop'
import UserReducer from './UserRed'
import { combineReducers }  from 'redux'

const rootReducer = combineReducers({
    changeNumber,changeItemNumber,UserReducer
})

export default rootReducer
