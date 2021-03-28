import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
