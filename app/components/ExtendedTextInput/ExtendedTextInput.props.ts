import { TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { ExtendedTextInputType } from './ExtendedTextInput.data';

export interface IExtendedTextInputProps extends TextInputProps {
  containerStyle?: ViewStyle;

  label?: string;
  labelStyle?: TextStyle;

  type?: ExtendedTextInputType;

  error?: string;
  errorStyle?: TextStyle;
}
