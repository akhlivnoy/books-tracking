import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IChallengeStyles {
  container: ViewStyle;
  darkGreyColor: TextStyle;
  mw200: ViewStyle;
  mv6: ViewStyle;
}

export const styles = StyleSheet.create<IChallengeStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.TITAN_WHITE,
  },
  darkGreyColor: {
    color: COLORS.DARKGREY,
  },
  mw200: {
    maxWidth: 200,
  },
  mv6: {
    marginVertical: 6,
  },
});
