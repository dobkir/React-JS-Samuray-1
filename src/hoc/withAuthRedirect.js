import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (this.props.isAuth) {
				return <Component {...this.props} />
			} else {
				return <Redirect to='/login' />
			}
		}

	};

	let ConnectedAuthRedirectComponent =
		connect(mapStateToPropsForRedirect)(RedirectComponent);
	return ConnectedAuthRedirectComponent;
}
