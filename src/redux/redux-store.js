import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import { finalFormReducer } from './finalForm-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware } = require('redux');

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	finalForm: finalFormReducer,
	app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
// to see the current state enter in the console: store.getState()

export default store;
