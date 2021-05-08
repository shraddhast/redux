import {BUY_CAKE, BUY_ICECREAM} from '../Action/ActType'
 const initialState = {
    numberOfCakes: 10,
    numberOfIcecreams: 30
}

const changeItemNumber = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes:  state.numberOfCakes - action.payload
        }
        case BUY_ICECREAM: return {
            ...state,
            numberOfIcecreams:  state.numberOfIcecreams - 1
        }
        
        default: return state
    }
}

export default changeItemNumber