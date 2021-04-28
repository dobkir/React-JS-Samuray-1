import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const CLEAR_POST = 'CLEAR-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi! How are you?', likesCount: '5' },
		{ id: 2, message: 'It`s my first post', likesCount: '3' },
		{ id: 3, message: 'BlaBla', likesCount: '2' },
		{ id: 4, message: 'Dada', likesCount: '2' },
	],
	newPostText: 'new post text',
	profile: null,
	status: ''
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length + 1,
				message: state.newPostText,
				likesCount: '0'
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			}
		case CLEAR_POST:
			return {
				...state,
				newPostText: ''
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case DELETE_POST:
			return { ...state, posts: state.posts.filter(p => p.id != action.postId) }
		default:
			return state;
	}
};

export const addPost = () => ({ type: ADD_POST });
export const clearPost = () => ({ type: CLEAR_POST });
export const updateNewPostText = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (userId) => (dispatch) => {
	profileAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	});
};

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(response => {
			dispatch(setStatus(response.data));
		});
};

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
};

export default profileReducer;
