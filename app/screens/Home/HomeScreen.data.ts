import { IMAGES } from '../../assets';
import { IChallengeItem } from '../../components/Challenge/Challenge.props';
import { IUser } from '../../models/IUser';

export const USER: IUser = {
  name: 'Anna',
  surname: 'Muster',
  image: IMAGES.DUMMY_AVATAR,
};

export interface IChallengeListItem {
  id: string;
  challenge: IChallengeItem;
}

export const CHALLENGE_ITEMS: IChallengeListItem[] = [
  {
    id: 'aaa',
    challenge: {
      title: 'Hier steht der CHallenge Titel, max zwei Zeilen',
      points: 120,
      dateFrom: '1.9.21',
      dateTo: '1.10.21',
      label: 'Label',
    },
  },
  {
    id: 'bbb',
    challenge: {
      title: 'Hier steht der CHallenge Titel, max zwei Zeilen',
      points: 120,
      dateFrom: '1.9.21',
      dateTo: '1.10.21',
      label: 'Label',
    },
  },
  {
    id: 'ccc',
    challenge: {
      title: 'Hier steht der CHallenge Titel, max zwei Zeilen',
      points: 120,
      dateFrom: '1.9.21',
      dateTo: '1.10.21',
      label: 'Label',
    },
  },
];
