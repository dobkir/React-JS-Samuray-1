const ADD_POST = 'ADD-POST';
const CLEAR_POST = 'CLEAR-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: '0'
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case CLEAR_POST:
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const clearPostActionCreator = () => ({ type: CLEAR_POST });
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
