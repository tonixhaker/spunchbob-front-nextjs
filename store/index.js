import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { requestsPromiseMiddleware } from 'redux-saga-requests';

import auth from './auth/reducer';
import order from './order/reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import saga from './saga';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth,
    order
});

export function initializeStore(initialState = undefined) {
    const middlewares = [
        requestsPromiseMiddleware({ auto: true }),
        thunkMiddleware,
        sagaMiddleware
    ];

    // Disable Logger at server side.
    if ( process.browser ) {
        middlewares.push(loggerMiddleware);
    }

    const store = createStore(rootReducer, initialState,
        composeWithDevTools(applyMiddleware(...middlewares)));

    sagaMiddleware.run(saga);

    return store;
}
