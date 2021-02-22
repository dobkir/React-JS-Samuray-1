
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route path='/profile' render={() =>
					<Profile state={props.state.profilePage} />} />
				<Route path='/dialogs' render={() =>
					<Dialogs state={props.state.dialogsPage} />} />
			</div>
		</div>
	);
};

export default App;

