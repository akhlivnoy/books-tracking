import React from 'react';
import { Text, View } from 'react-native';

import { IMAGES } from '../../../assets';
import { generalStyles } from '../../../utils/styles';
import { TabNavigatorOptions } from '../../../utils/types';
import { TabBarIcon, TabBarUserPhoto } from './components';
import { styles } from './MainTabNavigator.options.styles';

export const ScreenStub: React.FC = () => (
  <View style={[generalStyles.flex, styles.pt128]}>
    <Text>Screen stub</Text>
  </View>
);

export const mainTabBarOptions = {
  showLabel: false,
  style: styles.tabBar,
};

export const tabOptions: TabNavigatorOptions = {
  HomeScreen: {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        iconActive={IMAGES.HOME}
        iconInactive={IMAGES.HOME}
        title="Home"
      />
    ),
  },
  Search: {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        iconActive={IMAGES.SEARCH}
        iconInactive={IMAGES.SEARCH}
        title="Search"
      />
    ),
  },
  Media: {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        iconActive={IMAGES.PLAY_CIRCLE}
        iconInactive={IMAGES.PLAY_CIRCLE}
        title="Media"
      />
    ),
  },
  Profile: {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        iconActive={IMAGES.USER}
        iconInactive={IMAGES.USER}
        title="Profile"
      />
    ),
  },
};
