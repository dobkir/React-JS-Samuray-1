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
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Bebebe' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Who am I?' },
	],
	newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			}
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messages: [
					...state.messages,
					{ id: state.messages.length + 1, message: body }
				]
			}
		default:
			return state;
	}
};

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = (text) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default dialogsReducer;
