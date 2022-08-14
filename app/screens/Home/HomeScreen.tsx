import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExtendedText } from '../../components';
import { IHomeScreenProps } from './HomeScreen.props';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.background} />

      <View style={styles.contentContainer}>
        <ExtendedText>Home Screen</ExtendedText>
      </View>
    </SafeAreaView>
  );
};
