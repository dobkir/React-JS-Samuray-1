import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.profile}>
			<div className={classes.profile__top}></div>
			<div>
				ava + description
			</div>
			<div>
				My posts
					<div>
					New post
						<div>
						<div>
							post 1
						</div>
						<div>
							post 2
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
