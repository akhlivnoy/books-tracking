import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ExtendedButton,
  ExtendedText,
  ExtendedTextInput,
  ExtendedTextInputType,
} from '../../components';
import { ILoginScreenProps } from './LoginScreen.props';
import { styles } from './LoginScreen.styles';

export const LoginScreen: React.FC<ILoginScreenProps> = ({ navigation }) => {
  const goToSignUp = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const goToHome = useCallback(() => {
    navigation.replace('MainTabNavigator');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.background} />

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <ExtendedText preset="bold34" style={styles.title}>
            Books Tracking
          </ExtendedText>

          <ExtendedText preset="bold14" style={styles.darkgreyColor}>
            Login to your account
          </ExtendedText>
        </View>

        <View>
          <ExtendedTextInput
            type={ExtendedTextInputType.Default}
            placeholder="Full Name"
            style={styles.input}
          />

          <ExtendedTextInput
            type={ExtendedTextInputType.Password}
            placeholder="Password"
            style={styles.input}
          />
        </View>
        <View>
          <ExtendedButton onPress={goToHome} title="Login" preset="tree" />
          <View style={styles.bottomContainer}>
            <ExtendedText preset="medium12">
              Don't have an account?
            </ExtendedText>

            <TouchableOpacity onPress={goToSignUp}>
              <ExtendedText preset="bold12" style={styles.forestmistColor}>
                Sign Up
              </ExtendedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
