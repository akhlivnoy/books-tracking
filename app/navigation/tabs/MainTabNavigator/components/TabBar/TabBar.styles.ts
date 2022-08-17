import { StyleSheet, ViewStyle } from 'react-native';

interface ITabBarStyles {
  container: ViewStyle;
  pb10: ViewStyle;
}

export const styles = StyleSheet.create<ITabBarStyles>({
  container: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  pb10: {
    paddingBottom: 10,
  },
});
