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
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: '0'
			};
			let stateCopy = { ...state };
			stateCopy.posts = [...state.posts];
			stateCopy.posts.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case CLEAR_POST: {
			let stateCopy = { ...state };
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state };
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const clearPostActionCreator = () => ({ type: CLEAR_POST });
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
