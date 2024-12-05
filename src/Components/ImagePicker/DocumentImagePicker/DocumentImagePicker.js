import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../../theme/colors';
import {layout, spacing} from '../../../theme/styles';
import {vw} from '../../../theme/units';
import MyIcons from '../../MyIcons';
import CustomText from '../../wrappers/Texts/CustomText';
import ImagePickerSetup from '../ImagePickerSetup/ImagePickerSetup';
import Animated, {BounceIn, FadeOut} from 'react-native-reanimated';

const DocumentImagePicker = ({handleImage, isEdit, errors}) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (imagePath, mime, type) => {
    console.log('Image Path handleImageChange', imagePath, mime, type);
    //  return
    setProfileImage({uri: imagePath[0]});
    const imageObj = {
      uri: imagePath[0],
      type: mime,
      name: type,
    };
    if (handleImage) handleImage(imageObj);
  };

  return (
    <ImagePickerSetup
      onImageChange={handleImageChange}
      uploadVideo={false}
      isMultiple={false}
      style={{
        position: 'relative',
      }}>
      <View style={[styles?.wrapper, !profileImage && {width: '100%'}]}>
        {profileImage ? (
          <FastImage
            source={profileImage}
            style={styles?.images}
            resizeMode="cover"
          />
        ) : (
          <>
            <MyIcons name="upload" size={32} />
            <CustomText text="Upload Image" underline />
          </>
        )}
      </View>
      {profileImage && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles?.cameraBtn}
          onPress={() => setProfileImage(null)}>
          <MyIcons name={'closed'} size={22} />
        </TouchableOpacity>
      )}
    </ImagePickerSetup>
  );
};

export default DocumentImagePicker;

const styles = StyleSheet.create({
  wrapper: {
    height: vw * 24,
    width: vw * 24,
    borderRadius: layout.borderRadius,
    overflow: 'hidden',
    flexDirection: 'column',
    gap: spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    height: '100%',
    width: '100%',
  },
  cameraBtn: {
    backgroundColor: colors?.theme?.secondary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -10,
    top: -10,
  },
});
