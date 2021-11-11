import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import allReducers from "../reducer"


import allSagas from "../saga"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    allReducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(allSagas);

export default store
