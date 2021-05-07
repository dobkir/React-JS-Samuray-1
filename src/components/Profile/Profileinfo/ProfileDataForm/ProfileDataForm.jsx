import React from 'react'
import { Form, Field } from 'react-final-form'
import createDecorator from 'final-form-focus'
import { connect } from 'react-redux'
import classes from './ProfileDataForm.module.css'

const ProfileDataForm = ({ onSubmit, profile, responseError }) => {

	const focusOnError = createDecorator()

	return (
		<div>
			<Form
				onSubmit={onSubmit}
				validate={values => {
					const errors = {}
					if (!values.fullName) {
						errors.fullName = 'Required'
					}
					return errors
				}}
				decorators={[focusOnError]}
				subscription={{
					submitting: true
				}}

				initialValues={{
					fullName: profile.fullName,
					lookingForAJob: profile.lookingForAJob ? false : true,
					lookingForAJobDescription: profile.lookingForAJobDescription,
					aboutMe: profile.aboutMe,
					contacts: profile.contacts
				}}

				render={({ handleSubmit, form, submitting, pristine, values }) => (

					<form className={classes.container} onSubmit={handleSubmit}>
						<div>
							<button className={classes.submit__btn} type='submit' disabled={submitting}>save</button>
						</div>
						{responseError && <div className={classes.errorField}>
							{responseError}
						</div>
						}

						<Field name='fullName'>
							{({ input, meta }) => (
								<div className={`${classes.fieldArea} ${meta.active ? classes.active : ''}`}>
									<label>Full Name</label>
									<input {...input} type='text' placeholder='Full Name' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}
						</Field>
						<Field name='lookingForAJob'>
							{({ input, meta }) => (
								<div className={`${classes.fieldArea} ${meta.active ? classes.active : ''}`}>
									<label>Looking for a job</label>
									<input {...input} type='checkbox' />
								</div>
							)}
						</Field>
						<Field name='lookingForAJobDescription'>
							{({ input, meta }) => (
								<div className={`${classes.fieldArea} ${meta.active ? classes.active : ''}`}>
									<label>My professional skills</label>
									<textarea {...input} type='textarea' placeholder='My professional skills' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}
						</Field>
						<Field name='aboutMe'>
							{({ input, meta }) => (
								<div className={`${classes.fieldArea} ${meta.active ? classes.active : ''}`}>
									<label>About me</label>
									<textarea {...input} type='textarea' placeholder='About me' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)}
						</Field>
						<div>
							<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
								return <div key={key}>
									{key}:
									<Field name={'contacts.' + key}>
										{({ input, meta }) => (
											<div className={`${classes.fieldArea} ${meta.active ? classes.active : ''}`}>
												<input {...input} type='text' placeholder={key} />
												{meta.error && meta.touched && <span>{meta.error}</span>}
											</div>
										)}
									</Field>
								</div>
							})}
						</div>
					</form>
				)
				}
			/>
		</div >
	)
}

const mapStateToProps = (state) => ({
	responseError: state.profilePage.responseError
});

export default connect(mapStateToProps)(ProfileDataForm);
