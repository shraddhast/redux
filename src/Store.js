import { applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger';
import { buycake } from './Component/Action/Act';
import rootReducer from './Component/Reducer/RootRed'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const store = createStore(rootReducer,composeWithDevTools(
     applyMiddleware(logger,thunk)),
     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );

     store.dispatch(buycake())
     // const unsubscribe = store.unsubscribe(() => console.log(store.getState()))
     // store.dispatch(buycake())
     // store.dispatch(buycake())
     // store.dispatch(buycake())
     // unsubscribe()
export default store