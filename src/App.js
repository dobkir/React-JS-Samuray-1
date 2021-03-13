
import './App.css';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
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

