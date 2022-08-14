import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ITabBarStyles {
  container: ViewStyle;
  pb10: ViewStyle;
}

export const styles = StyleSheet.create<ITabBarStyles>({
  container: {
    paddingVertical: 16,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: COLORS.WHITE,
  },
  pb10: {
    paddingBottom: 10,
  },
});
