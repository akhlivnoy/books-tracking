import React, { useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';

import { IMAGES } from '../../assets';
import {
  ExtendedButton,
  ExtendedText,
  ExtendedTextInput,
} from '../../components';
import { IRegisterScreenProps } from './RegisterScreen.props';
import { styles } from './RegisterScreen.styles';
import { signUpValidationSchema } from './RegisterScreen.validation';
import { INPUTS_DATA } from './RegisterScreen.data';

export const RegisterScreen: React.FC<IRegisterScreenProps> = ({
  navigation,
}) => {
  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

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
          onSubmit={_.noop}>
          {({
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <KeyboardAwareScrollView>
              {_.map(INPUTS_DATA, item => (
                <ExtendedTextInput
                  key={item.id}
                  onChangeText={handleChange(item.option)}
                  onBlur={() => setFieldTouched(item.option)}
                  type={item.type}
                  placeholder={item.placeholder}
                  style={styles.input}
                  error={touched[item.option] && errors[item.option]}
                  errorStyle={styles.errorColor}
                />
              ))}

              <ExtendedText preset="medium12" style={styles.agreement}>
                By signing you agree to our term of use and privacy notice
              </ExtendedText>

              <ExtendedButton
                disabled={!isValid}
                onPress={handleSubmit}
                preset="tree"
                title="Sign up"
              />
            </KeyboardAwareScrollView>
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
