import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IHomeScreenStyles {
  main: ViewStyle;
  background: ViewStyle;
  contentContainer: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  darkgreyColor: TextStyle;
  input: ViewStyle;
  bottomContainer: ViewStyle;
  forestmistColor: TextStyle;
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
    zIndex: -1,
    bottom: 0,
    left: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.72,
    backgroundColor: COLORS.FOG,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 35,
  },
  title: {
    marginBottom: 4,
    color: COLORS.TREE,
  },
  darkgreyColor: {
    color: COLORS.DARKGREY,
  },
  input: {
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  forestmistColor: {
    color: COLORS.FORESTMIST,
    textDecorationLine: 'underline',
  },
});
