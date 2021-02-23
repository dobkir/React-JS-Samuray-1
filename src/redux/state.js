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
			]
		}
	},

	getState() {
		return this._state;
	},

	_callSubscriber() {
		console.log('State changed');
	},

	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: '0'
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},

	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},

	subscriber(observer) {
		this._callSubscriber = observer;
	}

};

export default store;
