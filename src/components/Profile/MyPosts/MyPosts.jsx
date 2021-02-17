import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={classes.container}>
			My posts
			<div className={classes.post__area}>
				<textarea className={classes.textarea} name="message" id="messageArea" cols="30" rows="10" placeholder="Enter your message"></textarea>
				<div className={classes.post__footer}>
					<button className={classes.posts__btn} type="submit">Add post</button>
					<button className={classes.posts__btn} type="submit">Remove</button>
				</div>
				<hr />
				<div className={classes.posts}>
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
};

export default MyPosts;
