import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { AuthStackNavigator } from './stacks';
import { InitialScreen } from '../screens';
import { navigationRef } from '../services/navigator';
import { GLOBAL_NAVIGATION_STACK_OPTIONS } from './options';
import { MainTabNavigator } from './tabs';

export type RootParams = {
  Initial: undefined;
  AuthStack: undefined;
  MainTabNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={GLOBAL_NAVIGATION_STACK_OPTIONS}>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
