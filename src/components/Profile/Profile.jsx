import classes from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
	return (
		<div>
			<Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
