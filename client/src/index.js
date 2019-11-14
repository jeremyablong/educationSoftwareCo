import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from "./store/store.js";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import Loading from "./loading.js";

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<Loading />} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
