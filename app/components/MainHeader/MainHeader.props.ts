import { ViewProps } from 'react-native';

import { IUser } from '../../models/IUser';

export interface IMainHeaderProps extends ViewProps {
  user: IUser;
}
