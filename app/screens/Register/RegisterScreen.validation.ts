import * as yup from 'yup';
import { REGEXPS } from '../../utils/regexps';

export const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(REGEXPS.FULL_NAME, 'Enter at least 2 names')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(REGEXPS.SMALL_LETTER, 'Password must have a small letter')
    .matches(REGEXPS.CAPITAL_LETTER, 'Password must have a capital letter')
    .matches(REGEXPS.NUMBER, 'Password must have a number')
    .matches(
      REGEXPS.SPECIAL_CHARACTER,
      'Password must have a special character',
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});
