import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/state';

const Dialogs = (props) => {
	let dialogsPage = props.store.getState().dialogsPage;
	let newMessageElement = React.createRef();
	let dialogsElements = dialogsPage.dialogs.map(dialog =>
		<DialogItem name={dialog.name} id={dialog.id} />);
	let dialogsMessages = dialogsPage.messages.map(message =>
		<Message message={message.message} />);
	let sendMessage = () => {
		props.store.dispatch(sendMessageActionCreator());
	};
	let onMessageChange = (e) => {
		// let text = newMessageElement.current.value;
		let text = e.target.value;
		let action = (updateNewMessageBodyActionCreator(text));
		props.store.dispatch(action);
	};

	return (
		<div className={classes.container}>
			<h2 className={classes.title}>Dialogs</h2>
			<hr />
			<div className={classes.dialogs}>

				<div className={classes.items}>
					{dialogsElements}
				</div>

				<div className={classes.messages}>
					<div>{dialogsMessages}</div>
					<div className={classes.message__area}>
						<textarea className={classes.textarea} name="message" id="messageArea" cols="30"
							rows="10" placeholder="Enter your message" ref={newMessageElement}
							value={dialogsPage.newMessageBody} onChange={onMessageChange} />
						<div className={classes.message__footer}>
							<button className={classes.btn} type="submit" onClick={sendMessage}>Send</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
