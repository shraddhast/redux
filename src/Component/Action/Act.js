export const incNumber =()=> { 
   return {
    type: "INCREMENT"
   } 
}

export const decNumber =()=>{ 
    return {
        type: "DECREMENT"
    }
}

export const incrementFive = (num) => {
    return{
        type: "INCREMENTFIVE",
        payload:num
    }
}

// export const buycake = () => {
//     return{
//         type: "BUYCAKE",
//         info: "first action"
//     }
// }
// const initialCakes = {
//     numberOfCake: 10
// }