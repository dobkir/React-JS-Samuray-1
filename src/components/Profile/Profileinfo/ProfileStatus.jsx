import React, { useState, useEffect } from 'react';
import classes from './Profileinfo.module.css';
const ProfileStatus = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}

	return (
		<div className={classes.profileStatus}>
			{ !editMode &&
				<div>
					<span className={`${classes.status__info} ${classes.profileStatus}`} onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
				</div>
			}
			{editMode &&
				<div>
					<textarea className={classes.inputStatus} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
						value={status} />
				</div>
			}
		</div>
	)
}

export default ProfileStatus;
