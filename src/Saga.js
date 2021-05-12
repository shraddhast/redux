import { delay, takeLatest }  from 'redux-saga/effects'
import {takeEvery, put}  from "redux-saga/effects"
import { INCREMENT } from './Component/Action/ActType'


function* Increment_saga(){
  yield delay(5000)
  yield put({type:"INCREMENT_ASYNC"})
  
}
//generator function
export function* counter() {
   yield takeLatest(INCREMENT, Increment_saga)
  }
  
  // dont dispatch action with same name again else it will lead to infinite loop eg: INCREMENT TO INCREMENT_ASYN
  // untill i do this, that wont hapen  we need generator for saga
 // export const store = createStore(countReducer, applyMiddleware(sagaMiddleware));
  
