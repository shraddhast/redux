import { applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger';
import { counter} from './Saga'
import { buycake } from './Component/Action/Act';
import rootReducer from './Component/Reducer/RootRed'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,composeWithDevTools(
     applyMiddleware(logger,thunk,sagaMiddleware)),
     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );

     store.dispatch(buycake())
     // const unsubscribe = store.unsubscribe(() => console.log(store.getState()))
     // store.dispatch(buycake())
     // unsubscribe()

     sagaMiddleware.run(counter);
export default store