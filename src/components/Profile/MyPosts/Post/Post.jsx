import classes from './Post.module.css';
import ava1 from './../../../../images/ava-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = ({ message, likesCount }) => {
	return (
		<div className={classes.item}>
			<img className={classes.avatar} src={ava1} alt='avatar' />
			<div className={classes.post}>{message}</div>
			<div className={classes.like}>
				<p><FontAwesomeIcon icon={['fas', 'heart']} size='lg' fixedWidth /> {likesCount}</p>
			</div>
		</div>
	);
};

export default Post;
