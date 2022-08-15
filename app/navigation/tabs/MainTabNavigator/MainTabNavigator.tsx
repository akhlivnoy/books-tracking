import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBar } from './components/TabBar';
import {
  mainTabBarOptions,
  ScreenStub,
  tabOptions,
} from './MainTabNavigator.options';
import { ITabBarProps } from './components/TabBar/TabBar.props';
import { HomeScreen } from '../../../screens';
import { DISABLED_SWIPE_GESTURES_OPTIONS } from '../../options';

export type MainTabParams = {
  HomeScreen: undefined;
  Search: undefined;
  Media: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParams>();

export const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={DISABLED_SWIPE_GESTURES_OPTIONS}
    tabBar={(props: ITabBarProps) => <TabBar {...props} />}
    tabBarOptions={mainTabBarOptions}>
    <Tab.Screen
      name="HomeScreen"
      options={tabOptions.HomeScreen}
      component={HomeScreen}
    />
    <Tab.Screen
      name="Search"
      options={tabOptions.Search}
      component={ScreenStub}
    />
    <Tab.Screen
      name="Media"
      options={tabOptions.Media}
      component={ScreenStub}
    />
    <Tab.Screen
      name="Profile"
      options={tabOptions.Profile}
      component={ScreenStub}
    />
  </Tab.Navigator>
);
