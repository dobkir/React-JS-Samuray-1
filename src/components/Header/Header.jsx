import { NavLink } from 'react-router-dom';
import logo from './../../images/the_seated_samurai.png';
import classes from './Header.module.css';

const Header = ({ isAuth, login, logout }) => {
	return (
		<header className={classes.header}>
			<img className={classes.header__logo} src={logo} alt='logo' />
			<h1 className={classes.header__title}>React Samurai</h1>

			<div className={classes.loginBlock}>
				{isAuth
					? <div>{login} -- <button onClick={logout}>Log out</button> </div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	)
};

export default Header;
