import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './Profileinfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import userPhotoLarge from '../../../images/samurai.svg';

const Profileinfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		console.log(formData);
		saveProfile(formData).then(
			() => {
				setEditMode(false);
			}
		);
	}

	return (
		<div>
			<div className={classes.profile__top}></div>
			<div className={classes.profile__area}>
				<img className={classes.avatar__large} src={profile.photos.large || userPhotoLarge} />
				<div>
					<span className={classes.profileLabel}>Status </span>(change on doubleclick):
					<ProfileStatus status={status} updateStatus={updateStatus} />
				</div>
				<div className={classes.avatar__input}>
					<label className={classes.input__avatar}>
						{isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
						{`>> Choose an avatar <<`}</label>
				</div>
				<div>
					{editMode
						? <ProfileDataForm profile={profile} onSubmit={onSubmit} />
						: <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
				</div>
			</div>
		</div>
	);
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div>
			<div>{isOwner && <div><button className={classes.edit__btn} onClick={goToEditMode}>{`>> Edit profile <<`}</button></div>}</div>
			<div>
				<span className={classes.profileLabel}>Full Name: </span>
				<span className={classes.profileStatus}> {profile.fullName}</span>
			</div>

			<div>
				<span className={classes.profileLabel}>Looking for a job: </span>
				<span className={classes.profileStatus}> {profile.lookingForAJob ? 'yes' : 'no'}</span>
			</div>
			{
				profile.lookingForAJob &&
				<div>
					<span className={classes.profileLabel}>My professional skills: </span>
					<span className={classes.profileStatus}>{profile.lookingForAJobDescription}</span>
				</div>
			}
			<div>
				<span className={classes.profileLabel}>About me: </span>
				<span className={classes.profileStatus}>{profile.aboutMe}</span>
			</div>
			<div>
				<span className={classes.profileLabel}>Contacts</span>: {Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
			</div>
		</div>
	)
};

const Contact = ({ contactTitle, contactValue }) => {
	return <div className={`${classes.contacts} ${classes.profileStatus}`}><b>{contactTitle}</b>: {contactValue}</div>
}

export default Profileinfo;
