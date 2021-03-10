import { connect } from 'react-redux';
import {
	addPost,
	clearPost,
	updateNewPostText
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
};

const MyPostsContainer = connect(mapStateToProps, {
	updateNewPostText, clearPost, addPost
})(MyPosts);

export default MyPostsContainer;
