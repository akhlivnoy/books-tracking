import { ViewProps } from 'react-native';

export interface IChallengeProps extends ViewProps {
  title: string;
  points: number;
  dateFrom: string;
  dateTo: string;
  label: string;
}
