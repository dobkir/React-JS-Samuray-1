import { Form, Field, FormSpy } from 'react-final-form';
import classes from './Login.module.css';
import createDecorator from 'final-form-focus';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
// import FormStateToRedux from '../common/FormStateToRedux';  // if I will to use Redux State
// import FormStateFromRedux from '../common/FormStateFromRedux';  // if I will to use Redux State

const Login = ({ isAuth, login, authError, captchaUrl }) => {

	// const loginFormState = ({ form }) => (
	// 	<FormSpy onChange={state => console.log(form, state)} />
	// );

	const focusOnError = createDecorator()

	if (isAuth) {
		return <Redirect to={'/profile'} />
	}

	const getResults = (values) => {
		login(values.email, values.password, values.rememberMe, values.captcha);
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
					captcha: ''
				}}
				render={({ handleSubmit, form, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit}>
						{/* <FormStateToRedux form='loginForm' /> */}
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
						{ captchaUrl && <img className={classes.captcha__img} src={captchaUrl} />}
						{ captchaUrl &&
							<Field name='captcha'>
								{({ input, meta }) => (
									<div className={`${classes.fieldArea} ${meta.active ? classes.active : ''}`}>
										<label>Captcha</label>
										<input {...input} type='text' placeholder='Symbols from image' />
										{meta.error && meta.touched && <span>{meta.error}</span>}
									</div>
								)}
							</Field>
						}
						<div className={classes.buttons}>
							<button type='submit' disabled={submitting}>
								Submit
            	</button>
							<button type='button' onClick={form.reset} disabled={submitting || pristine}>
								Reset
            	</button>
						</div>
						<div className={classes.authErrorField}>
							{authError}
						</div>
					</form>
				)}
			/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	authError: state.auth.authError,
	captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { login })(Login);

