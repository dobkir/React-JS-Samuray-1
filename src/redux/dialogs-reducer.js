const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Victor' },
		{ id: 6, name: 'Valera' },
	],

	messages: [
		{ id: 1, message: 'Hi!' },
		{ id: 1, message: 'How are you?' },
		{ id: 1, message: 'Bebebe' },
		{ id: 1, message: 'Yo' },
		{ id: 1, message: 'Who am I?' },
	],
	newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY: {
			let stateCopy = { ...state };
			stateCopy.newMessageBody = action.body;
			return stateCopy;
		}
		case SEND_MESSAGE: {
			let stateCopy = { ...state };
			let body = stateCopy.newMessageBody;
			stateCopy.newMessageBody = '';
			stateCopy.messages = [...state.messages];
			stateCopy.messages.push({ id: 6, message: body });
			return stateCopy;
		}
		default:
			return state;
	}
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (text) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default dialogsReducer;