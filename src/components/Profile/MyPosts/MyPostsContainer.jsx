import React from 'react';
import { addPostActionCreator, clearPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	let state = props.store.getState();
	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};
	let clearPost = () => {
		props.store.dispatch(clearPostActionCreator());
	};
	let onPostChange = (text) => {
		let action = (updateNewPostTextActionCreator(text));
		props.store.dispatch(action);
	};

	return <MyPosts updateNewPostText={onPostChange} clearPost={clearPost} addPost={addPost}
		posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
};

export default MyPostsContainer;
