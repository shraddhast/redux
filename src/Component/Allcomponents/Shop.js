import React from 'react'
import { buycake , buyicecream } from '../Action/Act';
import { connect } from 'react-redux'

function Shop(props) {
    
    return (
        <div>
            <h1>SHOP ITEMS DETAILS</h1>

            <h1>NumberOfCakes - {props.numberOfCakes}</h1>
            <button onClick={props.buycake}>Buycake</button><br/>

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
        buycake : () => dispatch(buycake()),
        buyicecream : () => dispatch(buyicecream()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Shop)
