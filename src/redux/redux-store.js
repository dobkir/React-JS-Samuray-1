import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer
});

let store = createStore(reducers);

window.store = store;
// to see the current state enter in the console: store.getState()

export default store;
