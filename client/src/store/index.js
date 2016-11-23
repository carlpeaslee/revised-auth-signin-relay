import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import {rootSaga} from '../actions/saga'
import reducers from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
)

const INITIAL_STATE = {
  ui: {
    loginCardShowing: true,
    signupCardShowing: false
  }
}

const configureStore = () => {

  const configuration = createStore(reducers, INITIAL_STATE, enhancer)

  return configuration
}

const store = configureStore()

sagaMiddleware.run(rootSaga)

export default store
