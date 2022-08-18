import { ExtendedTextInputType } from '../../components';

export enum InputTypes {
  FullName = 'fullName',
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

export interface IInput<TInputTypes> {
  id: string;
  option: TInputTypes;
  type: ExtendedTextInputType;
  placeholder?: string;
}

export const INPUTS_DATA: ReadonlyArray<IInput<InputTypes>> = [
  {
    id: 'fullName',
    option: InputTypes.FullName,
    type: ExtendedTextInputType.Default,
    placeholder: 'Full Name',
  },
  {
    id: 'email',
    option: InputTypes.Email,
    type: ExtendedTextInputType.Email,
    placeholder: 'Email',
  },
  {
    id: 'paddword',
    option: InputTypes.Password,
    type: ExtendedTextInputType.Password,
    placeholder: 'Password',
  },
  {
    id: 'confirmPassword',
    option: InputTypes.ConfirmPassword,
    type: ExtendedTextInputType.Password,
    placeholder: 'Confirm Password',
  },
];
