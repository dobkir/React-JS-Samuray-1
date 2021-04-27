import { Form, Field, FormSpy } from 'react-final-form';
import classes from './Login.module.css';
import createDecorator from 'final-form-focus';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { login } from "../../redux/auth-reducer";
import FormStateToRedux from '../common/Preloader/FormStateToRedux';
import FormStateFromRedux from '../common/Preloader/FormStateFromRedux';

const Login = (props) => {

	const loginFormState = ({ form }) => (
		<FormSpy onChange={state => console.log(form, state)} />
	);

	const focusOnError = createDecorator()

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	const getResults = (values) => {
		props.login(values.email, values.password, values.rememberMe);
	}

	return (
		<div className={classes.container}>
			<h1 className={classes.title}>🏁Login</h1>
			<h2 className={classes.subtitle}>Password / Confirm Validation</h2>
			<Form
				onSubmit={getResults}
				validate={values => {
					const errors = {}
					if (!values.email) {
						errors.email = 'Required'
					}
					if (!values.password) {
						errors.password = 'Required'
					}
					return errors
				}}
				decorators={[focusOnError]}
				subscription={{
					submitting: true
				}}
				initialValues={{
					email: '',
					password: '',
					rememberMe: false,
				}}
				render={({ handleSubmit, form, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit}>
						{/* <FormStateToRedux form="loginForm" /> */}
						<Field name='email'>
							{/* {fieldState => (
								<pre>{JSON.stringify(fieldState)}</pre>)} */}
							{({ input, meta }) => (
								<div className={`${classes.fieldArea} ${meta.active ? classes.active : ''}`}>
									<label>Email</label>
									<input {...input} type='email' placeholder='Email' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}
						</Field>
						<Field name='password'>
							{({ input, meta }) => (
								<div className={`${classes.fieldArea} ${meta.active ? classes.active : ''}`}>
									<label>Password</label>
									<input {...input} type='password' placeholder='Password' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}
						</Field>
						<Field name='rememberMe'>
							{({ input, meta }) => (
								<div className={`${classes.fieldArea} ${meta.active ? classes.active : ''}`}>
									<label>Remember me</label>
									<input {...input} type='checkbox' />
								</div>
							)}
						</Field>
						<div className={classes.buttons}>
							<button type='submit' disabled={submitting}>
								Submit
            	</button>
							<button type='button' onClick={form.reset} disabled={submitting || pristine}>
								Reset
            	</button>
						</div>
						{/* <h3>Form State from Redux</h3>
						<FormStateFromRedux form="loginForm" /> */}
					</form>
				)}
			/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);

