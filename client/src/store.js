// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// import rootReducer from './reducers';

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'; // imports from redux-persist
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers'; // Root reducer

const persistConfig = {
  // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
};

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  composeWithDevTools(applyMiddleware(...middleware)) // add any middlewares here
);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
