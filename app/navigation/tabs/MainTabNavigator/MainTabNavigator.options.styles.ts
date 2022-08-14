import { StyleSheet, ViewStyle } from 'react-native';

interface IMainTabNavigatorStyles {
  tabBar: ViewStyle;
  pt128: ViewStyle;
}

export const styles = StyleSheet.create<IMainTabNavigatorStyles>({
  tabBar: {
    elevation: 0,
  },
  pt128: {
    paddingTop: 128,
  },
});
