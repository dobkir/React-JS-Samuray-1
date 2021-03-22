import Preloader from '../../common/Preloader/Preloader';
import classes from './Profileinfo.module.css';
import ProfileStatus from './ProfileStatus';

const Profileinfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div className={classes.profile__top}></div>
			<div className={classes.profile__area}>
				<img className={classes.avatar__large} src={props.profile.photos.large} />
				<p>Full Name: {props.profile.fullName}</p>
				<p>About me: {props.profile.aboutMe}</p>
				<p><ProfileStatus status={'Hello everybody'} /></p>
			</div>
		</div>
	);
};

export default Profileinfo;
