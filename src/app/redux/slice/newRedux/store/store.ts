import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose } from "redux";

import rootSaga from "../saga/rootSaga";
import rootReducer from "../reducers/rootReducer";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
// const { run: runSaga } = sagaMiddleware;

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
