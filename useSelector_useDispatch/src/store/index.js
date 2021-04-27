import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import counterReducer from '../features/counter/store/reducer';
import sagas from '../sagas';

export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const middleware = [
    ...getDefaultMiddleware({ thunk: false }),
    ...middlewares
];

const configureAppStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: middleware,
});

sagaMiddleware.run(sagas);

export default configureAppStore;