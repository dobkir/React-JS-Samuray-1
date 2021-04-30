import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import { finalFormReducer } from './finalForm-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware, compose } = require('redux');

const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	finalForm: finalFormReducer,  // Work with finalForm's state in redux-state. It doesn't work now. Saved as a template.
	app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;
// to see the current state enter in the console: store.getState()

export default store;
