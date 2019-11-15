import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
 
import rootReducer from '../reducers/index.js';
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);


store.subscribe(() => {
	console.log("Store.getState() :", store.getState())
})