import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={classes.dialog}>
			<NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className={classes.message}>{props.message}</div>
};

const Dialogs = (props) => {
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Dialogs</h2>
			<hr />
			<div className={classes.dialogs}>

				<div className={classes.items}>
					<DialogItem name='Dimych' id='1' />
					<DialogItem name='Andrey' id='2' />
					<DialogItem name='Sveta' id='3' />
					<DialogItem name='Sasha' id='4' />
					<DialogItem name='Victor' id='5' />
					<DialogItem name='Valera' id='6' />
				</div>

				<div className={classes.messages}>
					<Message message='Hi!' />
					<Message message='How are you?' />
					<Message message='Bebebe' />
					<Message message='Yo' />
					<Message message='Who am I?' />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
