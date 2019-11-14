import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from '../reducers/index.js';
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const store = createStore(persistedReducer);

export const persistor = persistStore(store);


store.subscribe(() => {
	console.log("Store.getState() :", store.getState())
})