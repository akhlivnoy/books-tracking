import React, { useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.background} />

      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image source={IMAGES.ARROW_LEFT} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <ExtendedText>Register</ExtendedText>

          <ExtendedText>Create your new account</ExtendedText>
        </View>

        <View>
          <ExtendedTextInput
            type={ExtendedTextInputType.Default}
            placeholder="Full Name"
            style={styles.input}
          />

          <ExtendedTextInput
            type={ExtendedTextInputType.Email}
            placeholder="Email"
            style={styles.input}
          />

          <ExtendedTextInput
            type={ExtendedTextInputType.Password}
            placeholder="Password"
            style={styles.input}
          />

          <ExtendedTextInput
            type={ExtendedTextInputType.Password}
            placeholder="Confirm Password"
            style={styles.input}
          />
        </View>

        <View>
          <ExtendedText>
            By signing you agree to our term of use and privacy notice
          </ExtendedText>

          <ExtendedButton title="Sign up" />

          <View style={styles.bottomContainer}>
            <ExtendedText preset="medium12">
              Already have an account?
            </ExtendedText>
            <TouchableOpacity onPress={goToLogin}>
              <ExtendedText>Sign Up</ExtendedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
