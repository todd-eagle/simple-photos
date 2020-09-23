import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './CombinedReducers'



export default createStore(reducers, applyMiddleware(promiseMiddleware))

//degugging redux

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
  
//   export default createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(promiseMiddleware)))

