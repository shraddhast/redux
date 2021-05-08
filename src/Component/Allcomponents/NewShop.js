import React, { useState } from 'react'
import { buycake , buyicecream } from '../Action/Act';
import { connect } from 'react-redux'


function NewShop(props) {
    const [number, setnumber] = useState(1)
    return (
        <div>
            <h1>SHOP ITEMS DETAILS</h1>

            <h1>NumberOfCakes - {props.numberOfCakes}</h1>
            <input type="text" value={number} onChange={e => setnumber( e.target.value)}/>
            <button onClick={ () => props.buycake(number) }>Buy {number}cake</button><br/>

            <h1>NumberOfIcecreams - {props.numberOfIcecreams}</h1>
            <button onClick={props.buyicecream}>Buycake</button><br/> 

        </div>
    )
}
const mapStateToProps = state => {
    return{
        numberOfCakes : state.changeItemNumber.numberOfCakes,
        numberOfIcecreams : state.changeItemNumber.numberOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buycake : (number) => dispatch(buycake(number)),
        buyicecream : () => dispatch(buyicecream()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps )(NewShop)
