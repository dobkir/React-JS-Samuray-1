import Preloader from '../../common/Preloader/Preloader';
import classes from './Profileinfo.module.css';
import ProfileStatus from './ProfileStatus';

import userPhotoLarge from '../../../images/samurai.svg';

const Profileinfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return (
		<div>
			<div className={classes.profile__top}></div>
			<div className={classes.profile__area}>
				<img className={classes.avatar__large} src={profile.photos.large || userPhotoLarge} />
				<div className={classes.avatar__input}>
					<label className={classes.input__label}>
						{isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
						{`>> Выберите аватар <<`}</label>
				</div>
				<p>Full Name: <span className={classes.profileStatus}> {profile.fullName}</span></p>
				<p>About me: <span className={classes.profileStatus}> {profile.aboutMe}</span></p>
				<div>Status (change on click): <ProfileStatus status={status} updateStatus={updateStatus} /></div>
			</div>
		</div>
	);
};

export default Profileinfo;
