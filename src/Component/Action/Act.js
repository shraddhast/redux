import {BUY_CAKE, BUY_ICECREAM, DECREMENT, INCREMENT, INCREMENTFIVE } from './ActType'

export const incNumber =()=> { 
   return {
    type: INCREMENT
   } 
}

export const decNumber =()=>{ 
    return {
        type: DECREMENT
    }
}

export const incrementFive = (num) => {
    return{
        type: INCREMENTFIVE,
        payload:num
    }
}

export const buycake = (number = 1) => {
    return{
        type: BUY_CAKE,
        payload: number,
        info: "first action"
    }
}

export const buyicecream = () => {
    return{
        type: BUY_ICECREAM,
        info: "first action"
    }
}

