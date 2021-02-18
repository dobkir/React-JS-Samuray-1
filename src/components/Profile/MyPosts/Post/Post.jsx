import classes from './Post.module.css';
import ava1 from './../../../../images/ava-1.webp';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img className={classes.avatar} src={ava1} alt='avatar' />
			<p className={classes.post}>{props.message}</p>
			<div className={classes.like}>
				<p><i class="fa fa-heart fa-lg"></i> {props.likesCount}</p>
			</div>
		</div>
	);
};

export default Post;
