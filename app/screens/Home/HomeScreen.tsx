import React from 'react';
import { View } from 'react-native';

import { IMAGES } from '../../assets';
import { ExtendedText, MainHeader } from '../../components';
import { IUser } from '../../models/IUser';
import { IHomeScreenProps } from './HomeScreen.props';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  const USER: IUser = {
    name: 'Anna',
    surname: 'Muster',
    image: IMAGES.DUMMY_AVATAR,
  };

  return (
    <View style={styles.main}>
      <View style={styles.background} />
      <MainHeader user={USER} />

      <View style={styles.contentContainer}>
        <ExtendedText>Home Screen</ExtendedText>
      </View>
    </View>
  );
};
