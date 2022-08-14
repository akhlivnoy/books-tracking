import React from 'react';
import { Image, View } from 'react-native';

import { ExtendedText } from '../../../../../components';
import { ITabBarIconProps } from './TabBarIcon.props';
import { styles } from './TabBarIcon.styles';

export const TabBarIcon: React.FC<ITabBarIconProps> = ({
  focused,
  iconActive,
  iconInactive,
  title,
}) => {
  return (
    <View style={styles.container}>
      <Image source={focused ? iconActive : iconInactive} style={styles.icon} />
      <ExtendedText preset="caption-s-medium" style={styles.title}>
        {title}
      </ExtendedText>
    </View>
  );
};
