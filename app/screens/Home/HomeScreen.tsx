import React from 'react';
import { View } from 'react-native';

import { IMAGES } from '../../assets';
import { MainHeader, ProgressCard } from '../../components';
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

      <ProgressCard
        title="Titel der Challenge steht hier max zwei Zielen"
        currentProgress={10}
        overallProgress={30}
        points={10}
        style={styles.progressCard}
      />
    </View>
  );
};
