import classes from './Users.module.css';

const Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers();
	};

	return (
		<div>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img className={classes.avatar} src={u.avatarUrl} alt="avatar" />
						</div>
						<div>
							{u.followed
								? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { props.follow(u.id) }}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	)
};

export default Users;
