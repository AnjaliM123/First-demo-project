<<<<<<< HEAD
// import React from 'react';
=======
import React from 'react';
>>>>>>> c8162c33260b8ddbb618379220f62ad292a75119
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import allReducers from "../reducers"

import sagas from "../sagas"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    allReducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

export default store
