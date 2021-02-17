import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.profile}>
			<div className={classes.profile__top}></div>
			<div>
				ava + description
			</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
