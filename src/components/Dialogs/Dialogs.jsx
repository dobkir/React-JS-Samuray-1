import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map(dialog =>
		<DialogItem name={dialog.name} id={dialog.id} />);
	let dialogsMessages = props.state.messages.map(message =>
		<Message message={message.message} />);

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
