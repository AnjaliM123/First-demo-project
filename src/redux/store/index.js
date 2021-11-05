// import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import allReducers from "../reducers/index"

// import sagas from "../sagas"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    allReducers,
    applyMiddleware(sagaMiddleware),
);

// sagaMiddleware.run(sagas);

export default store