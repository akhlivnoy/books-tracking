import { StyleSheet, ViewStyle } from 'react-native';

interface IMainTabNavigatorStyles {
  tabBar: ViewStyle;
  pt128: ViewStyle;
}

export const styles = StyleSheet.create<IMainTabNavigatorStyles>({
  tabBar: {
    elevation: 0,
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  pt128: {
    paddingTop: 128,
  },
});
