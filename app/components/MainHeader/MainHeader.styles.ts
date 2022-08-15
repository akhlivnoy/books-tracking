import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IMainHeaderStyles {
  container: ViewStyle;
  whiteColor: TextStyle;
  ml20: ViewStyle;
}

export const styles = StyleSheet.create<IMainHeaderStyles>({
  container: {
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  whiteColor: {
    color: COLORS.WHITE,
  },
  ml20: {
    marginLeft: 20,
  },
});
