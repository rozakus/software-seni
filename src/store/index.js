import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// reducer
import reposReducer from './reducers/reposReducer'

const rootReducer = combineReducers({ reposReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store