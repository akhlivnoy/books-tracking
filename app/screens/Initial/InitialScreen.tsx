import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { ExtendedText } from '../../components';
import { IInitialScreenProps } from './InitialScreen.props';
import { styles } from './InitialScreen.styles';

export const InitialScreen: React.FC<IInitialScreenProps> = ({
  navigation,
}) => {
  useEffect(() => {
    // TODO: Timeout for loading simulation. Replace it with data fetching
    setTimeout(() => navigation.replace('AuthStack'), 500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <ExtendedText preset="bold34" style={styles.fogColor}>
        Books Tracking
      </ExtendedText>
    </SafeAreaView>
  );
};
