import { TextStyle, StyleSheet } from 'react-native';

import { COLORS } from '../../themes/colors';

const BASE: TextStyle = {
  color: COLORS.BLACK,
  fontSize: 15,
};

interface IExtendedTextStyles {
  default: TextStyle;
  regular50: TextStyle;
  medium12: TextStyle;
  medium20: TextStyle;
  bold12: TextStyle;
  bold14: TextStyle;
  bold16: TextStyle;
  bold34: TextStyle;
}

export type ExtendedTextPresets = keyof IExtendedTextStyles;

export default StyleSheet.create<IExtendedTextStyles>({
  default: BASE,
  regular50: {
    fontSize: 50,
    fontWeight: '400',
    lineHeight: 61,
  },
  medium12: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 17,
  },
  medium20: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
  },
  bold12: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  bold14: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
  },
  bold16: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
  },
  bold34: {
    fontSize: 34,
    fontWeight: '700',
  },
});
