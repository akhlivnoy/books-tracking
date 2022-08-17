import React from 'react';
import { View } from 'react-native';
import { IProgressBarProps } from './ProgressBar.props';
import { styles } from './ProgressBar.styles';

export const ProgressBar: React.FC<IProgressBarProps> = ({
  progress,
  length,
  height,
  color,
  unfilledColor,
  opacity,
  borderRadius,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          height: height,
          borderRadius: borderRadius,
        },
      ]}>
      <View
        style={{
          width: `${(progress / length) * 100}%`,
          backgroundColor: color || 'green',
        }}
      />
      <View
        style={[
          styles.progressTail,
          {
            backgroundColor: unfilledColor || color || 'green',
            opacity: opacity || 1,
          },
        ]}
      />
    </View>
  );
};
