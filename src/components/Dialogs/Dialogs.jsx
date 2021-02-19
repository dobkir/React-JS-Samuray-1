import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialogs = () => {
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Dialogs</h2>
			<hr />
			<div className={classes.dialogs}>

				<div className={classes.items}>
					<div className={classes.dialog}>
						<NavLink to='/dialogs/1' activeClassName={classes.active}>Dimych</NavLink>
					</div>
					<div className={classes.dialog}>
						<NavLink to='/dialogs/2' activeClassName={classes.active}>Andrey</NavLink>
					</div>
					<div className={classes.dialog}>
						<NavLink to='/dialogs/3' activeClassName={classes.active}>Sveta</NavLink>
					</div>
					<div className={classes.dialog}>
						<NavLink to='/dialogs/4' activeClassName={classes.active}>Sasha</NavLink>
					</div>
					<div className={classes.dialog}>
						<NavLink to='/dialogs/5' activeClassName={classes.active}>Victor</NavLink>
					</div>
					<div className={classes.dialog}>
						<NavLink to='/dialogs/6' activeClassName={classes.active}>Valera</NavLink>
					</div>
				</div>

				<div className={classes.messages}>
					<div className={classes.message}>Hi!</div>
					<div className={classes.message}>How are you?</div>
					<div className={classes.message}>Bebebe</div>
				</div>

			</div>
		</div>
	);
};

export default Dialogs;
