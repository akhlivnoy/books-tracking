import React from 'react';
import { Image, View } from 'react-native';

import { ExtendedText, ProgressBar } from '..';
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
          <ExtendedText
            preset="medium14"
            style={[styles.mb6, styles.darkGreyColor]}>
            {title}
          </ExtendedText>
          <ExtendedText preset="bold12" style={styles.darkGreyColor}>
            {points} Punkte
          </ExtendedText>
        </View>

        <Image source={IMAGES.DUMMY_CARD_IMAGE} />
      </View>
      <View style={styles.progressContainer}>
        <View style={generalStyles.row}>
          <Image source={IMAGES.AWARD} style={styles.mr10} />

          <View>
            <ExtendedText
              preset="medium12"
              style={[styles.mb4, styles.darkGreyColor]}>
              Your Progress
            </ExtendedText>
            <ExtendedText preset="bold16" style={styles.darkGreyColor}>
              {currentProgress}%
            </ExtendedText>
          </View>
        </View>

        <View style={generalStyles.row}>
          <Image source={IMAGES.AWARD} style={styles.mr10} />

          <View>
            <ExtendedText
              preset="medium12"
              style={[styles.mb4, styles.darkGreyColor]}>
              Overall Progress
            </ExtendedText>
            <ExtendedText preset="bold16" style={styles.darkGreyColor}>
              {overallProgress}%
            </ExtendedText>
          </View>
        </View>
      </View>

      <ProgressBar
        progress={15}
        length={100}
        height={15}
        color={COLORS.SUNNY}
        unfilledColor={COLORS.GRAY}
        borderRadius={10}
      />
    </View>
  );
};
