import { connect } from 'react-redux';
import {
	sendMessageActionCreator,
	updateNewMessageBodyActionCreator
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (text) => {
			dispatch(updateNewMessageBodyActionCreator(text));
		},
		sendMessage: () => {
			dispatch(sendMessageActionCreator());
		}
	}
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
