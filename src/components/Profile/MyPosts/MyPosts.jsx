import classes from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
	{ id: 1, message: 'Hi! How are you?', likesCount: '5' },
	{ id: 2, message: 'It`s my first post', likesCount: '3' },
	{ id: 3, message: 'BlaBla', likesCount: '2' },
	{ id: 4, message: 'Dada', likesCount: '2' },
];

let postElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

const MyPosts = (props) => {
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
