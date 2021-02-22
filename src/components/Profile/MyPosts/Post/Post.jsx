import classes from './Post.module.css';
import ava1 from './../../../../images/ava-1.webp';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img className={classes.avatar} src={ava1} alt='avatar' />
			<div className={classes.post}>{props.message}</div>
			<div className={classes.like}>
				<p><i class="fa fa-heart fa-lg"></i> {props.likesCount}</p>
			</div>
		</div>
	);
};

export default Post;
