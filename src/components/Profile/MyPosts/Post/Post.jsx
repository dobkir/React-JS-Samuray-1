import classes from './Post.module.css';
import ava1 from './../../../../images/ava-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img className={classes.avatar} src={ava1} alt='avatar' />
			<div className={classes.post}>{props.message}</div>
			<div className={classes.like}>
				<p><FontAwesomeIcon icon={['fas', 'heart']} size='lg' fixedWidth /> {props.likesCount}</p>
			</div>
		</div>
	);
};

export default Post;
