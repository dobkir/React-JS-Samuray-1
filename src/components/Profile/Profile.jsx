import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
	return (
		<div>
			<Profileinfo />
			<MyPosts profilePage={props.profilePage}
				dispatch={props.dispatch} />
		</div>
	);
};

export default Profile;
