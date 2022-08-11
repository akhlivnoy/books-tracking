import { TextStyle, StyleSheet } from 'react-native';

import { COLORS } from '../../themes/colors';

const BASE: TextStyle = {
  color: COLORS.BLACK,
  fontSize: 15,
};

interface IExtendedTextStyles {
  default: TextStyle;
  initialTitle: TextStyle;
}

export type ExtendedTextPresets = keyof IExtendedTextStyles;

export default StyleSheet.create<IExtendedTextStyles>({
  default: BASE,
  initialTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: COLORS.FOG,
  },
});
