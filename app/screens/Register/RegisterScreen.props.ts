import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Register'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Register'>;

export interface IRegisterScreenProps extends NavigationProps, RouteProps {}
