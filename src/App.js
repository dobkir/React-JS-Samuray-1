
import './App.css';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route path='/profile/:userID?' render={() => <ProfileContainer />} />
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/users' render={() => <UsersContainer />} />
			</div>
		</div>
	);
};

export default App;

