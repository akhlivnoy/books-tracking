import { TextStyle, StyleSheet } from 'react-native';

import { COLORS } from '../../themes/colors';

const BASE: TextStyle = {
  color: COLORS.BLACK,
  fontSize: 15,
};

interface IExtendedTextStyles {
  default: TextStyle;
  bold34: TextStyle;
}

export type ExtendedTextPresets = keyof IExtendedTextStyles;

export default StyleSheet.create<IExtendedTextStyles>({
  default: BASE,
  bold34: {
    fontSize: 34,
    fontWeight: '700',
  },
});
