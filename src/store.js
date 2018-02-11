import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import rootReducer from './reducers';

const enhancers = []
const middleware = [
  promise(),
  thunk,
  logger
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  composedEnhancers
)

export default store;