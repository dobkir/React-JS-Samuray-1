import logo from './../images/the_seated_samurai.png'

const Header = () => {
	return (
		<header className='header'>
			<img className='header__logo' src={logo} alt='logo' />
		</header>
	);
};

export default Header;
