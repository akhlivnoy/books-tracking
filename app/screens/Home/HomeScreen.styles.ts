import { StyleSheet, ViewStyle, Dimensions } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IHomeScreenStyles {
  main: ViewStyle;
  background: ViewStyle;
  progressCard: ViewStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  main: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 100,
    backgroundColor: COLORS.TREE,
  },
  background: {
    position: 'absolute',
    zIndex: 1,
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
});
