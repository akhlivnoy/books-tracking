import React from 'react';
import { View } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ITabBarProps } from './TabBar.props';
import { styles } from './TabBar.styles';

export const TabBar: React.FC<ITabBarProps> = props => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, !insets.bottom && styles.pb10]}>
      <BottomTabBar {...props} />
    </View>
  );
};
