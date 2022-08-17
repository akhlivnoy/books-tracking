import React from 'react';
import { Image, View } from 'react-native';
import { ExtendedText } from '..';
import { IMAGES } from '../../assets';

import { IChallengeProps } from './Challenge.props';
import { styles } from './Challenge.styles';

export const Challenge: React.FC<IChallengeProps> = ({
  title,
  points,
  dateFrom,
  dateTo,
  label,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.mw200}>
        <ExtendedText preset="medium14" style={styles.darkGreyColor}>
          {title}
        </ExtendedText>

        <ExtendedText
          preset="bold14"
          style={[styles.darkGreyColor, styles.mv6]}>
          {points} Punkte
        </ExtendedText>

        <ExtendedText preset="medium12" style={styles.darkGreyColor}>
          {dateFrom}—{dateTo} • {label}
        </ExtendedText>
      </View>

      <Image source={IMAGES.GREEN_SQUARE} />
    </View>
  );
};
