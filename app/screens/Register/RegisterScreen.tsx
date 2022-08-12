import React, { useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as yup from 'yup';

import { IMAGES } from '../../assets';
import {
  ExtendedButton,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
} from '../../components';
import { IRegisterScreenProps } from './RegisterScreen.props';
import { styles } from './RegisterScreen.styles';

export const RegisterScreen: React.FC<IRegisterScreenProps> = ({
  navigation,
}) => {
  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.background} />

      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={navigation.goBack} style={styles.roundBtn}>
          <Image source={IMAGES.ARROW_LEFT} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <ExtendedText preset="regular50" style={styles.title}>
            Register
          </ExtendedText>

          <ExtendedText preset="medium20" style={styles.darkgreyColor}>
            Create your new account
          </ExtendedText>
        </View>

        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={values => console.log(JSON.stringify(values, null, 2))}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <>
              <ExtendedTextInput
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                onBlur={() => setFieldTouched('fullName')}
                type={ExtendedTextInputType.Default}
                placeholder="Full Name"
                style={styles.input}
              />
              {touched.fullName && errors.fullName && (
                <ExtendedText preset="bold12" style={styles.errorColor}>
                  {errors.fullName}
                </ExtendedText>
              )}

              <ExtendedTextInput
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                type={ExtendedTextInputType.Email}
                placeholder="Email"
                style={styles.input}
              />
              {touched.email && errors.email && (
                <ExtendedText preset="bold12" style={styles.errorColor}>
                  {errors.email}
                </ExtendedText>
              )}

              <ExtendedTextInput
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                type={ExtendedTextInputType.Password}
                placeholder="Password"
                style={styles.input}
              />
              {touched.password && errors.password && (
                <ExtendedText preset="bold12" style={styles.errorColor}>
                  {errors.password}
                </ExtendedText>
              )}

              <ExtendedTextInput
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
                type={ExtendedTextInputType.Password}
                placeholder="Confirm Password"
                style={styles.input}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <ExtendedText preset="bold12" style={styles.errorColor}>
                  {errors.confirmPassword}
                </ExtendedText>
              )}

              <ExtendedText preset="medium12" style={styles.agreement}>
                By signing you agree to our term of use and privacy notice
              </ExtendedText>

              <ExtendedButton
                disabled={!isValid}
                onPress={handleSubmit}
                preset="tree"
                title="Sign up"
              />
            </>
          )}
        </Formik>

        <View>
          <View style={styles.bottomContainer}>
            <ExtendedText preset="medium12">
              Already have an account?
            </ExtendedText>

            <TouchableOpacity onPress={goToLogin}>
              <ExtendedText preset="bold12" style={styles.forestmistColor}>
                Login
              </ExtendedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
