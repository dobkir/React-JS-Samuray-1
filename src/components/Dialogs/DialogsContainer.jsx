import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
	sendMessage,
	updateNewMessageBody
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
};

export default compose(
	connect(mapStateToProps, {
		sendMessage, updateNewMessageBody
	}),
	withAuthRedirect
)(Dialogs);
