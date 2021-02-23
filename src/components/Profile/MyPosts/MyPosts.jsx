import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postElements = props.state.posts.map(post =>
		<Post message={post.message} likesCount={post.likesCount} />);
	let newPostElement = React.createRef();
	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	};
	let clearPost = () => {
		newPostElement.current.value = '';
	};

	return (
		<div className={classes.container}>
			<h3 className={classes.title}>My posts</h3>
			<div className={classes.post__area}>
				<textarea className={classes.textarea} name="message" id="messageArea" cols="30"
					rows="10" placeholder="Enter your message" ref={newPostElement}></textarea>
				<div className={classes.post__footer}>
					<button className={classes.posts__btn} type="submit" onClick={addPost}>Add post</button>
					<button className={classes.posts__btn} type="submit" onClick={clearPost}>Remove</button>
				</div>
				<hr />
				<div className={classes.posts}>
					{postElements}
				</div>
			</div>
		</div>
	);
};

export default MyPosts;
