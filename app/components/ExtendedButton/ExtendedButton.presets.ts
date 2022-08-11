import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

const BASE: ViewStyle = {
  backgroundColor: COLORS.BLACK,
  padding: 16,
};

interface IExtendedButtonStyles {
  default: ViewStyle;
  tree: ViewStyle;
}

interface IExtendedButtonAdditionalStyles {
  defaultTitle: TextStyle;
  treeTitle: TextStyle;
}

export type ExtendedButtonPresets = keyof IExtendedButtonStyles;

export const additionalStyles =
  StyleSheet.create<IExtendedButtonAdditionalStyles>({
    defaultTitle: { color: COLORS.WHITE },
    treeTitle: {
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 18,
      color: COLORS.TITAN_WHITE,
    },
  });

export default StyleSheet.create<IExtendedButtonStyles>({
  default: BASE,
  tree: {
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: COLORS.TREE,
  },
});
