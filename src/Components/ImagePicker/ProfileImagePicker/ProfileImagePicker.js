import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import ImagePickerSetup from '../ImagePickerSetup/ImagePickerSetup';
import {appImages} from '../../../Assets/Images';
import MyIcons from '../../MyIcons';
import {colors} from '../../../theme/colors';
import {layout, spacing} from '../../../theme/styles';
import {vw} from '../../../theme/units';

const Profile = ({handleImage, isEdit}) => {
  const [profileImage, setProfileImage] = useState(appImages?.profile);

  const handleImageChange = imagePath => {
    setProfileImage({uri: imagePath[0]});
    handleImage(imagePath);
  };

  return (
    <ImagePickerSetup
      onImageChange={handleImageChange}
      uploadVideo={false}
      isMultiple={false}
      style={{position: 'relative'}}>
      <View style={styles?.wrapper}>
        <FastImage
          source={profileImage}
          style={styles?.images}
          resizeMode="cover"
        />
      </View>
      {isEdit && (
        <View style={styles?.cameraBtn}>
          <MyIcons name={'camera'} size={'14'} />
        </View>
      )}
    </ImagePickerSetup>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    height: vw * 26,
    width: vw * 26,
    borderRadius: 100,
    overflow: 'hidden',
  },
  images: {
    height: '100%',
    width: '100%',
  },
  cameraBtn: {
    backgroundColor: colors?.theme?.secondary,
    borderRadius: 100,
    padding: spacing?.small,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 2,
    bottom: 0,
  },
});
