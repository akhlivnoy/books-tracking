import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IInitialScreenStyles {
  root: ViewStyle;
  fogColor: TextStyle;
}

export const styles = StyleSheet.create<IInitialScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: COLORS.TREE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fogColor: {
    color: COLORS.FOG,
  },
});
