import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = {
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

	posts: [
		{ id: 1, message: 'Hi! How are you?', likesCount: '5' },
		{ id: 2, message: 'It`s my first post', likesCount: '3' },
		{ id: 3, message: 'BlaBla', likesCount: '2' },
		{ id: 4, message: 'Dada', likesCount: '2' },
	]
};

ReactDOM.render(
	<React.StrictMode>
		<App state={state} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
