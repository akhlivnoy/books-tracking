import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IExtendedTextInputStyles {
  label: TextStyle;
  input: TextStyle;
  inputContainer: ViewStyle;
  error: TextStyle;
}

export const styles = StyleSheet.create<IExtendedTextInputStyles>({
  label: {},
  input: {
    flex: 1,
    marginLeft: 10,
    fontWeight: '500',
    color: COLORS.DARKGREY,
  },
  inputContainer: {
    minHeight: 50,
    padding: 10,
    alignItems: 'center',
    backgroundColor: COLORS.FORESTMIST,
    borderRadius: 10,
  },
  error: {},
});
