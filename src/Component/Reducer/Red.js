 const initialState = 10

const changeNumber = (state = initialState , action) => {
    switch(action.type){
        case "INCREMENT" : return  state + 1
        case "DECREMENT" : return state - 1 
        case "INCREMENTFIVE" : return state + action.payload
        //case "BUYCAKE" : return numberOfCakes =state.numberOfCakes + 1
        default : return state
    }
}

export default changeNumber;

