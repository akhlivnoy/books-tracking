import React from 'react';
import { View } from 'react-native';
import _ from 'lodash';

import { IMAGES } from '../../assets';
import {
  Challenge,
  ExtendedText,
  MainHeader,
  ProgressCard,
} from '../../components';
import { CHALLENGE_ITEMS, IChallengeListItem, USER } from './HomeScreen.data';
import { IHomeScreenProps } from './HomeScreen.props';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
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

      <ExtendedText preset="bold14" style={[styles.mt18, styles.darkGreyColor]}>
        Alle Challenges
      </ExtendedText>

      {_.map(CHALLENGE_ITEMS, (challengeItem: IChallengeListItem) => (
        <Challenge
          challenge={challengeItem.challenge}
          key={challengeItem.id}
          style={styles.mt16}
        />
      ))}
    </View>
  );
};
