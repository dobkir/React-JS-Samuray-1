import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let dialogsPage = store.getState().dialogsPage;
					let sendMessage = () => {
						store.dispatch(sendMessageActionCreator());
					};
					let onMessageChange = (text) => {
						let action = updateNewMessageBodyActionCreator(text);
						store.dispatch(action);
					};
					return <Dialogs updateNewMessageBody={onMessageChange}
						sendMessage={sendMessage} dialogsPage={dialogsPage} />
				}
			}
		</StoreContext.Consumer>
	)
};

export default DialogsContainer;
