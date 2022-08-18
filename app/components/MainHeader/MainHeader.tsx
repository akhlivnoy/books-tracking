import React from 'react';
import { Image, View } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { IMAGES } from '../../assets';
import { generalStyles } from '../../utils/styles';
import { IMainHeaderProps } from './MainHeader.props';
import { styles } from './MainHeader.styles';

export const MainHeader: React.FC<IMainHeaderProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={generalStyles.row}>
        <Image source={user.image} />

        <View style={styles.ml20}>
          <ExtendedText preset="bold12" style={styles.whiteColor}>
            Welcome back
          </ExtendedText>
          <ExtendedText preset="bold16" style={styles.whiteColor}>
            {user.name} {user.surname}
          </ExtendedText>
        </View>
      </View>

      <Image source={IMAGES.BELL} />
    </View>
  );
};
