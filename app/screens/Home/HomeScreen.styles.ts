import { StyleSheet, ViewStyle, Dimensions, TextStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IHomeScreenStyles {
  main: ViewStyle;
  background: ViewStyle;
  progressCard: ViewStyle;
  mt18: TextStyle;
  darkGreyColor: TextStyle;
  mt16: ViewStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  main: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 100,
    paddingTop: 75,
    backgroundColor: COLORS.TREE,
  },
  background: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    left: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.72,
    backgroundColor: COLORS.FOG,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  progressCard: {
    marginTop: 30,
  },
  mt18: {
    marginTop: 18,
  },
  darkGreyColor: {
    color: COLORS.DARKGREY,
  },
  mt16: {
    marginTop: 16,
  },
});
