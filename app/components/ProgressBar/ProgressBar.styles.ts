import { StyleSheet, ViewStyle } from 'react-native';

interface IProgressBarStyles {
  container: ViewStyle;
  progressTail: ViewStyle;
}

export const styles = StyleSheet.create<IProgressBarStyles>({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progressTail: {
    flex: 1,
  },
});
