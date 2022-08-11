import { TextStyle, StyleSheet } from 'react-native';

import { COLORS } from '../../themes/colors';

const BASE: TextStyle = {
  color: COLORS.BLACK,
  fontSize: 15,
};

interface IExtendedTextStyles {
  default: TextStyle;
  medium12: TextStyle;
  bold12: TextStyle;
  bold14: TextStyle;
  bold34: TextStyle;
}

export type ExtendedTextPresets = keyof IExtendedTextStyles;

export default StyleSheet.create<IExtendedTextStyles>({
  default: BASE,
  medium12: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 17,
  },
  bold12: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
  },
  bold14: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
  },
  bold34: {
    fontSize: 34,
    fontWeight: '700',
    // TODO: add to InitialScreen.styles
    //color: COLORS.FOG,
  },
});
