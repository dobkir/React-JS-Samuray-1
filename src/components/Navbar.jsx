import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={`${classes.nav__item} ${classes.nav__active}`}>
				<a>Profile</a>
			</div>
			<div className={classes.nav__item}>
				<a>Messages</a>
			</div>
			<div className={classes.nav__item}>
				<a>News</a>
			</div>
			<div className={classes.nav__item}>
				<a>Music</a>
			</div>
			<div className={classes.nav__item}>
				<a>Settings</a>
			</div>
		</nav>
	);
};

export default Navbar;
