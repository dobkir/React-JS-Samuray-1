// It doesn't work now. Saved as a template.

import React from 'react';
import { connect } from 'react-redux';
import { FormSpy } from 'react-final-form';
import { updateFormState } from '../../../redux/finalForm-reducer'


const FormStateToRedux = ({ form, updateFormState }) => (
	<FormSpy onChange={state => updateFormState(form, state)} />
);

export default connect(undefined, { updateFormState })(FormStateToRedux);
