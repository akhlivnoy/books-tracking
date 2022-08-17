import { ViewProps } from 'react-native';

export interface IProgressBarProps extends ViewProps {
  progress: number;
  length: number;
  height: number;
  color?: string;
  unfilledColor?: string;
  opacity?: number;
  borderRadius?: number;
}
