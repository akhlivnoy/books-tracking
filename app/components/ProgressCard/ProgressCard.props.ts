import { ViewProps } from 'react-native';

export interface IProgressCardProps extends ViewProps {
  title: string;
  currentProgress: number;
  overallProgress: number;
  points: number;
}
