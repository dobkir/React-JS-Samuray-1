import { NavLink } from "react-router-dom"
import classes from "./Error404.module.css"

const Error404 = () => {
	return (
		<div className={classes.error__container}>
			<p className={classes.error__title}>404 error</p>
			<p className={classes.error__description}>This page doesn't exist</p>
			<p className={classes.error__backlink}>
				You can sit here and watching Fuji or go to <NavLink className={classes.error__link} to={'/'}>homepage</NavLink>
			</p>
		</div>
	)
}

export default Error404;
