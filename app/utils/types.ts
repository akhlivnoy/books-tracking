import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { MainTabParams } from '../navigation/tabs/MainTabNavigator';

export type TabNavigatorOptions = {
  [key in keyof MainTabParams]?: BottomTabNavigationOptions;
};
