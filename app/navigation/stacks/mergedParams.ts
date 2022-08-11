import { AuthStackParams } from './authStackNavigator';
import { RootParams } from '../rootNavigator';

export type MergedStackParams = AuthStackParams & RootParams;
