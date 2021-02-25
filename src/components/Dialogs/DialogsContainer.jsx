import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

	let dialogsPage = props.store.getState().dialogsPage;
	let sendMessage = () => {
		props.store.dispatch(sendMessageActionCreator());
	};
	let onMessageChange = (text) => {
		let action = (updateNewMessageBodyActionCreator(text));
		props.store.dispatch(action);
	};

	return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={sendMessage} dialogsPage={dialogsPage} />
};

export default DialogsContainer;
