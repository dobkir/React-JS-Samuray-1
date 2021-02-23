import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
	return (
		<div>
			<Profileinfo />
			<MyPosts state={props.state} addPost={props.addPost} />
		</div>
	);
};

export default Profile;
