import React from 'react';
import classes from "./User.module.css";
import userPhoto from '../../images/defolt_user_64px.webp';
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, unfollow, follow }) => {
	return (
		<div className={classes.userBlock}>
			<span className={classes.userFollowing}>
				<div>
					<NavLink to={'/profile/' + user.id}>
						<img className={classes.userAvatar}
							src={user.photos.small != null ? user.photos.small : userPhoto}
							alt='avatar' />
					</NavLink>
				</div>
				<div>
					{user.followed
						? <button disabled={followingInProgress
							.some(id => id === user.id)}
							onClick={() => { unfollow(user.id) }}>
							Unfollow</button>
						: <button disabled={followingInProgress.some(id => id === user.id)}
							onClick={() => { follow(user.id) }}>
							Follow</button>}
				</div>
			</span>
			<span className={classes.userInfo}>
				<span>
					<div className={classes.userName}>{user.name}</div>
					<div className={classes.userStatus}>{user.status}</div>
					<div className={classes.userCountry}>{'user.location.country'}</div>
					<div className={classes.userCity}>{'user.location.city'}</div>
				</span>
			</span>
		</div>
	)
};

export default User;
