import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IHomeScreenStyles {
  main: ViewStyle;
  background: ViewStyle;
  contentContainer: ViewStyle;
  roundBtn: ViewStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  darkgreyColor: TextStyle;
  input: ViewStyle;
  errorColor: ViewStyle;
  bottomContainer: ViewStyle;
  agreement: ViewStyle;
  forestmistColor: TextStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
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
  contentContainer: {
    zIndex: 2,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
  },
  roundBtn: {
    position: 'absolute',
    top: 20,
    left: 15,
    width: 41,
    height: 41,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.FOG,
    borderRadius: 50,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 50,
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
  errorColor: {
    marginTop: -5,
    marginBottom: 15,
    color: COLORS.RED,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  agreement: {
    marginVertical: 25,
    textAlign: 'center',
  },
  forestmistColor: {
    color: COLORS.FORESTMIST,
    textDecorationLine: 'underline',
  },
});
