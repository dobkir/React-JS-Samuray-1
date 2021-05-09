import './App.css';

import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from './hoc/withSuspense'

import { initializeApp } from "./redux/app-reducer";
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Error404Page = React.lazy(() => import('./components/Error404/Error404'));

class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className='app-wrapper' >
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Switch>
						<Redirect exact from="/" to="/profile" />
						<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
						<Route path='/dialogs' render={withSuspense(DialogsContainer)} />
						<Route path='/users' render={withSuspense(UsersContainer)} />
						<Route path='/login' render={withSuspense(LoginPage)} />
						<Route path='*' render={withSuspense(Error404Page)} />
					</Switch>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);


const SamuraiJSApp = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<AppContainer />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	)
}

export default SamuraiJSApp;
