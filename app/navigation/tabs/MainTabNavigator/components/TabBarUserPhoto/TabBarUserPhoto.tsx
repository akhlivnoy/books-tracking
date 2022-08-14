import React from 'react';
import { Image, View } from 'react-native';

import { IMAGES } from '../../../../../assets';
import { ExtendedText } from '../../../../../components';
import { useAppSelector } from '../../../../../hooks';
import { ITabBarUserPhotoProps } from './TabBarUserPhoto.props';
import { styles } from './TabBarUserPhoto.styles';

export const TabBarUserPhoto: React.FC<ITabBarUserPhotoProps> = ({
  focused,
}) => {
  const userAvatar = useAppSelector(state => state.user.user?.avatar);

  return (
    <View style={styles.container}>
      <Image
        source={userAvatar ? { uri: userAvatar } : IMAGES.PERSON}
        style={focused ? styles.photoActive : styles.photo}
      />
      <ExtendedText preset="caption-s-medium" style={styles.title}>
        Profile
      </ExtendedText>
    </View>
  );
};
