import React from 'react';
import { Image, View } from 'react-native';
import * as Progress from 'react-native-progress';

import { ExtendedText } from '..';
import { IMAGES } from '../../assets';
import { COLORS } from '../../themes/colors';
import { generalStyles } from '../../utils/styles';
import { IProgressCardProps } from './ProgressCard.props';
import { styles } from './ProgressCard.styles';

export const ProgressCard: React.FC<IProgressCardProps> = ({
  title,
  currentProgress,
  overallProgress,
  points,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        <View style={styles.mw200}>
          <ExtendedText preset="medium14" style={styles.mb6}>
            {title}
          </ExtendedText>
          <ExtendedText preset="bold12">{points} Punkte</ExtendedText>
        </View>

        <Image source={IMAGES.DUMMY_CARD_IMAGE} />
      </View>

      <View style={styles.progressContainer}>
        <View style={generalStyles.row}>
          <Image source={IMAGES.AWARD} style={styles.mr10} />

          <View>
            <ExtendedText preset="medium12" style={styles.mb4}>
              Your Progress
            </ExtendedText>
            <ExtendedText preset="bold16">{currentProgress}%</ExtendedText>
          </View>
        </View>

        <View style={generalStyles.row}>
          <Image source={IMAGES.AWARD} style={styles.mr10} />

          <View>
            <ExtendedText preset="medium12" style={styles.mb4}>
              Overall Progress
            </ExtendedText>
            <ExtendedText preset="bold16">{overallProgress}%</ExtendedText>
          </View>
        </View>
      </View>
      <Progress.Bar
        progress={currentProgress / 100}
        width={295}
        height={15}
        borderWidth={0}
        borderRadius={25}
        color={COLORS.SUNNY}
        unfilledColor={COLORS.GRAY}
        style={generalStyles.asCenter}
      />
    </View>
  );
};
