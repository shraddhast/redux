import React from 'react'
import { buycake , buyicecream } from '../Action/Act';
import { connect } from 'react-redux'

function ItemContainer(props) {
    return (
        <div>
            Item {props.item}<br/>
            <button onClick={props.buyItem}>buyItems</button>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
const itemState = ownProps.cake ? 
state.changeItemNumber.numberOfCakes : 
state.changeItemNumber.numberOfIcecreams 
return {
    item: itemState
}
}

const mapDispatchToProps = (dispatch, ownProps) => {
const dispatchFunction = ownProps.cake 
? (number) => dispatch(buycake(number)) 
: () => dispatch(buyicecream())
return {
    buyItem : dispatchFunction
}
}



export default connect(mapStateToProps,mapDispatchToProps) (ItemContainer)
