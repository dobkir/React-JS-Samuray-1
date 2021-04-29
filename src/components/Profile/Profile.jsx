import classes from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ profile, status, updateStatus }) => {
	return (
		<div>
			<Profileinfo profile={profile} status={status} updateStatus={updateStatus} />
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
