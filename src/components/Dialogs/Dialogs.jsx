import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogs = [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Victor' },
		{ id: 6, name: 'Valera' },
	];

	let messages = [
		{ id: 1, message: 'Hi!' },
		{ id: 1, message: 'How are you?' },
		{ id: 1, message: 'Bebebe' },
		{ id: 1, message: 'Yo' },
		{ id: 1, message: 'Who am I?' },
	];

	let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

	let dialogsMessages = messages.map(message => <Message message={message.message} />);

	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Dialogs</h2>
			<hr />
			<div className={classes.dialogs}>

				<div className={classes.items}>
					{dialogsElements}
				</div>

				<div className={classes.messages}>
					{dialogsMessages}
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
