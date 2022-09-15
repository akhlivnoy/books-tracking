import { ImageProps } from 'react-native';

export interface ITabBarIconProps {
  focused: boolean;
  iconActive: ImageProps;
  iconInactive: ImageProps;
  title: string;
}
