import {createStore, combineReducers, applyMiddleware} from 'redux'
import {routerReducer} from 'react-router-redux'
import {mainReducer} from './reducer'
import {client} from '../client/redux/reducer'
import logger from 'redux-logger'

export const store = createStore(
    combineReducers({
        mainReducer, client,
        routing: routerReducer
    }),
    applyMiddleware(logger)
);