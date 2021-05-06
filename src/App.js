import React from 'react';
import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import {incNumber, decNumber, incrementFive } from './Component/Action/Act'

function App() {

  const dispatch = useDispatch()
  const myState = useSelector((state) => state.changeNumber );
  console.log(myState)
  
  return (
    <div className="App">
      <h1> INCREMENT and DECREMENT in REDUX</h1>

      <div className="quantity">
        <button onClick={() => dispatch(decNumber())}>-</button> 
        <input />
        <button onClick={() => dispatch(incNumber())}>+</button> 
        <button onClick={() => dispatch((incrementFive(5)))}>+5</button> 
      </div>
    </div>
  );
}

export default App;
