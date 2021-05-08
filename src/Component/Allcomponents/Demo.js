import React from "react";
import {useSelector , useDispatch} from 'react-redux'
import {incNumber, decNumber, incrementFive } from '../Action/Act'

function Demo() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeNumber);
  
  return (
    <div>
      <h1> INCREMENT and DECREMENT in REDUX</h1>

      <div className="quantity">
        <button onClick={() => dispatch(decNumber())}>-</button>
        <input value={myState} readOnly/>
        <button onClick={() => dispatch(incNumber())}>+</button>
        <button onClick={() => dispatch(incrementFive(5))}>+5</button>
      </div>
    </div>
  );
}

export default Demo;
