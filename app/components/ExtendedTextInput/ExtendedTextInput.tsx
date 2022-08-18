import React, { useCallback, useMemo } from 'react';
import { Image, TextInput, TextInputProps, View } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import {
  ExtendedTextInputPresetProps,
  ExtendedTextInputType,
} from './ExtendedTextInput.data';
import { IExtendedTextInputProps } from './ExtendedTextInput.props';
import { TextInputPasswordToggle } from './inputs';
import { styles } from './ExtendedTextInput.styles';
import { IMAGES } from '../../assets';
import { generalStyles } from '../../utils/styles';

export const ExtendedTextInput: React.FC<IExtendedTextInputProps> = ({
  label,
  labelStyle,
  type = ExtendedTextInputType.Default,
  error,
  errorStyle,
  style,
  ...rest
}) => {
  const initialInputProps = useMemo(
    () => ExtendedTextInputPresetProps[type],
    [type],
  );

  const InputComponent: React.ComponentType<TextInputProps> = useMemo(() => {
    switch (type) {
      case ExtendedTextInputType.Default:
      case ExtendedTextInputType.Email:
      case ExtendedTextInputType.Numeric:
      case ExtendedTextInputType.Password:
        return TextInput;
      case ExtendedTextInputType.PasswordToggle:
        return TextInputPasswordToggle;
    }
  }, [type]);

  const getIconSource = useCallback(() => {
    switch (type) {
      case ExtendedTextInputType.Email:
        return IMAGES.EMAIL;
      case ExtendedTextInputType.Password:
      case ExtendedTextInputType.PasswordToggle:
        return IMAGES.LOCK;
      default:
        return IMAGES.USER;
    }
  }, [type]);

  return (
    <View>
      {label && (
        <ExtendedText style={[styles.label, labelStyle]}>{label}</ExtendedText>
      )}
      <View style={[generalStyles.row, styles.inputContainer, style]}>
        <Image source={getIconSource()} />
        <InputComponent {...initialInputProps} {...rest} style={styles.input} />
      </View>
      {error && (
        <ExtendedText preset="bold12" style={[styles.error, errorStyle]}>
          {error}
        </ExtendedText>
      )}
    </View>
  );
};
