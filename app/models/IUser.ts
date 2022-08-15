import { ImageSourcePropType } from 'react-native';

export interface IApiUser {
  token: string;
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  image?: string;
  email_verified_at: string;
  create_at: string;
  updated_at: string;
}

export interface IUser {
  name: string;
  surname: string;
  image: ImageSourcePropType;
}
