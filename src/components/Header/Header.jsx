import { NavLink } from 'react-router-dom';
import logo from './../../images/the_seated_samurai.png';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img className={classes.header__logo} src={logo} alt='logo' />
			<h1 className={classes.header__title}>React Samurai</h1>

			<div className={classes.loginBlock}>
				{props.isAuth ? props.login
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
};

export default Header;
