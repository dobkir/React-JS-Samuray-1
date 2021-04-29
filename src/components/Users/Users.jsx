import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {

	return (
		<div>
			<Paginator currentPage={currentPage} onPageChanged={onPageChanged}
				totalUsersCount={totalUsersCount} pageSize={pageSize} />
			<div>
				{
					users.map(user => <User user={user}
						followingInProgress={props.followingInProgress}
						key={user.id}
						unfollow={props.unfollow}
						follow={props.follow}
						key={user.id}
					/>
					)
				}
			</div>


		</div>
	)
};

export default Users;
