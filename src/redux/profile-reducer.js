const ADD_POST = 'ADD-POST';
const CLEAR_POST = 'CLEAR-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi! How are you?', likesCount: '5' },
		{ id: 2, message: 'It`s my first post', likesCount: '3' },
		{ id: 3, message: 'BlaBla', likesCount: '2' },
		{ id: 4, message: 'Dada', likesCount: '2' },
	],
	newPostText: 'new post text'
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length + 1,
				message: state.newPostText,
				likesCount: '0'
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
		case CLEAR_POST:
			return {
				...state,
				newPostText: ''
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			};
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const clearPostActionCreator = () => ({ type: CLEAR_POST });
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
