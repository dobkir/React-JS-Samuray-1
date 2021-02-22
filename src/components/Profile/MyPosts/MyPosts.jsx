import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postElements = props.state.posts.map(post =>
		<Post message={post.message} likesCount={post.likesCount} />)

	return (
		<div className={classes.container}>
			<h3 className={classes.title}>My posts</h3>
			<div className={classes.post__area}>
				<textarea className={classes.textarea} name="message" id="messageArea" cols="30" rows="10" placeholder="Enter your message"></textarea>
				<div className={classes.post__footer}>
					<button className={classes.posts__btn} type="submit">Add post</button>
					<button className={classes.posts__btn} type="submit">Remove</button>
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
