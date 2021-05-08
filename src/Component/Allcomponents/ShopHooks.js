import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { buycake , buyicecream } from '../Action/Act';
import { connect } from 'react-redux'

function ShopHooks() {
    const dispatch = useDispatch()
    const cakes = useSelector((state) => state.changeItemNumber.numberOfCakes);
    const icecream = useSelector((state) => state.changeItemNumber.numberOfIcecreams);
    return (
        <div>
             
            
            <h1>NumberOfCakes - {cakes}</h1>
            <button onClick={()=>dispatch(buycake())}>buycake</button><br/>
            <h1>NumberOfIcecreams - {icecream} </h1><br/>
            <button onClick={()=>dispatch(buyicecream())}>buyicecream</button>
            

        </div>
    )
}


export default ShopHooks
