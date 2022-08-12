import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { LoginScreen, RegisterScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type AuthStackParams = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
