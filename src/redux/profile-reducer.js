import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const CLEAR_POST = 'CLEAR-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const RESPONSE_ERROR = 'RESPONSE-ERROR';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi! How are you?', likesCount: '5' },
		{ id: 2, message: 'It`s my first post', likesCount: '3' },
		{ id: 3, message: 'BlaBla', likesCount: '2' },
		{ id: 4, message: 'Dada', likesCount: '2' },
	],
	newPostText: 'new post text',
	profile: null,
	status: '',
	responseError: null
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
			return {
				...state,
				posts: state.posts.filter(p => p.id != action.postId)
			}
		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos }
			}
		case RESPONSE_ERROR:
			return {
				...state,
				responseError: action.responseError
			}
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
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const responseError = (responseError) => ({ type: RESPONSE_ERROR, responseError })

export const getUserProfile = (userId) => async (dispatch) => {
	const response = await profileAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export const savePhoto = (file) => async (dispatch) => {
	const response = await profileAPI.savePhoto(file);

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};

export const saveProfile = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.userId;
	const response = await profileAPI.saveProfile(profile);

	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userId));
	} else {
		dispatch(responseError(`Error: ${response.data.messages[0]}`));
		return Promise.reject(response.data.messages[0]);
	}
}

export default profileReducer;
