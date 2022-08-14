import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ITabBarIconStyles {
  container: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ITabBarIconStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 2,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    paddingTop: 6,
  },
});
