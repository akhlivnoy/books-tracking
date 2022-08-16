import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { LoginScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type AuthStackParams = {
  Login: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);
