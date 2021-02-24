const ADD_POST = 'ADD-POST';
const CLEAR_POST = 'CLEAR-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: '0'
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === CLEAR_POST) {
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({ id: 6, message: body });
			this._callSubscriber(this._state);
		}
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const clearPostActionCreator = () => ({ type: CLEAR_POST });
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (text) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default store;
