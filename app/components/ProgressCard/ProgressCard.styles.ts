import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../themes/colors';

interface IProgressCardStyles {
  container: ViewStyle;
  titleContainer: ViewStyle;
  mw200: ViewStyle;
  mb6: ViewStyle;
  mb4: ViewStyle;
  mr10: ImageStyle;
  bgGray: ViewStyle;
  progressContainer: ViewStyle;
}

export const styles = StyleSheet.create<IProgressCardStyles>({
  container: {
    padding: 15,
    zIndex: 10,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  mw200: {
    maxWidth: 200,
  },
  mb6: {
    marginBottom: 6,
  },
  mb4: {
    marginBottom: 4,
  },
  mr10: {
    marginRight: 10,
  },
  bgGray: {
    backgroundColor: 'rgba(197, 206, 211, 0.25);',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
