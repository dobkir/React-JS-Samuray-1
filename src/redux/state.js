import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi! How are you?', likesCount: '5' },
				{ id: 2, message: 'It`s my first post', likesCount: '3' },
				{ id: 3, message: 'BlaBla', likesCount: '2' },
				{ id: 4, message: 'Dada', likesCount: '2' },
			],
			newPostText: 'new post text'
		},

		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Andrey' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Victor' },
				{ id: 6, name: 'Valera' },
			],

			messages: [
				{ id: 1, message: 'Hi!' },
				{ id: 1, message: 'How are you?' },
				{ id: 1, message: 'Bebebe' },
				{ id: 1, message: 'Yo' },
				{ id: 1, message: 'Who am I?' },
			],
			newMessageBody: ''
		}
	},

	getState() {
		return this._state;
	},

	subscriber(observer) {
		this._callSubscriber = observer;
	},

	_callSubscriber() {
		console.log('State changed');
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	}
};

export default store;
