import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; // where all the app data is stored
import chat from './reducers';
import {addUser} from './actions';
import {setupSocket} from './sockets';

const store = createStore(chat);

store.dispatch(addUser('Me'));

// initialise redux

// import chat reducer - part of Redux

// create the store


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);
registerServiceWorker();