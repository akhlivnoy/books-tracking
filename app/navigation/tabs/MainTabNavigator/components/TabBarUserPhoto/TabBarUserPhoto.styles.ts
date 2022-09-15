import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ITabBarUserPhotoStyles {
  container: ViewStyle;
  photo: ImageStyle;
  photoActive: ImageStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ITabBarUserPhotoStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 2,
  },
  photo: {
    borderRadius: 100,
    width: 24,
    height: 24,
  },
  photoActive: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: COLORS.UI_BLACK,
  },
  title: {
    paddingTop: 6,
  },
});
