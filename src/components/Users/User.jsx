import React from 'react';
import classes from "./Users.module.css";
import userPhoto from '../../images/defolt_user_64px.webp';
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, unfollow, follow }) => {
	return (
		<div>
			<span>
				<div>
					<NavLink to={'/profile/' + user.id}>
						<img className={classes.avatar}
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
			<span>
				<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</span>
				<span>
					<div>{'user.location.country'}</div>
					<div>{'user.location.city'}</div>
				</span>
			</span>
		</div>
	)
};

export default User;
