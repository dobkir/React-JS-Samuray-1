import { connect } from 'react-redux';
import {
	addPostActionCreator,
	clearPostActionCreator,
	updateNewPostTextActionCreator
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextActionCreator(text));
		},
		clearPost: () => {
			dispatch(clearPostActionCreator());
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		}
	}
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
