// import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './RootReducer'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store