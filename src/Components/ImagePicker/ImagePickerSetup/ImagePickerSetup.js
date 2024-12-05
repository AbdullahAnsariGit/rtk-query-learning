import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Image as ImageCompressor,
  Video as VideoCompressor,
} from 'react-native-compressor';
import * as ImageCropPicker from 'react-native-image-crop-picker';
import {colors} from '../../../theme/colors';
import {font, layout, spacing} from '../../../theme/styles';
import ActionSheet from 'react-native-actions-sheet';
import MainButton from '../../Buttons/MainButton';
import SyneBold from '../../wrappers/Texts/SyneBold';
import MyIcons from '../../MyIcons';
import {vw} from '../../../theme/units';
import CustomText from '../../wrappers/Texts/CustomText';
import fonts from '../../../Assets/fonts';

export default ImagePickerSetup = ({
  children,
  onImageChange = () => {},
  uploadVideo = false,
  isMultiple = false,
  style,
}) => {
  const actionSheetRef = useRef(null);

  const imageChange = method => {
    console.log('method', method);
    if (method === 'camera') {
      ImageCropPicker.openCamera({
        mediaType: 'photo',
      }).then(async image => {
        actionSheetRef.current.hide();
        const result = await ImageCompressor.compress(image.path, {
          maxHeight: 400,
          maxWidth: 400,
          quality: 1,
        });
        console.log('result', result);
        onImageChange([result], image.mime, 'photo'); // Wrap result in an array
      });
    } else if (method === 'gallery') {
      ImageCropPicker.openPicker({
        multiple: isMultiple,
        mediaType: 'photo',
      }).then(async images => {
        console.log('imagesimages', images);
        actionSheetRef.current.hide();
        let result;
        if (isMultiple) {
          const compressedImages = await Promise.all(
            images?.map(img =>
              ImageCompressor.compress(img?.path, {
                maxHeight: 400,
                maxWidth: 400,
                quality: 1,
              }),
            ),
          );
          console.log('compressedImages', compressedImages);

          onImageChange(compressedImages, images[0]?.mime, 'photo');
        } else {
          result = await ImageCompressor.compress(images?.path, {
            maxHeight: 400,
            maxWidth: 400,
            quality: 1,
          });

          console.log(result, 'resultresult');
          onImageChange([result], images?.mime, 'photo'); // Wrap result in an array
        }
      });
    } else if (method === 'video') {
      ImageCropPicker.openPicker({
        mediaType: 'video',
      }).then(async video => {
        actionSheetRef.current.hide();
        const result = await VideoCompressor.compress(video.path, {
          compressionMethod: 'auto',
        });
        onImageChange([result], video.mime, 'video'); // Wrap result in an array
      });
    }
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => actionSheetRef.current.show()}
        style={style}>
        {children}
      </TouchableOpacity>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          backgroundColor: 'white',
          borderTopRightRadius: spacing.xxlarge,
          borderTopLeftRadius: spacing.xxlarge,
        }}>
        <View
          style={{
            height: spacing.small,
            borderRadius: 20,
            width: vw * 25,
            alignSelf: 'center',
            backgroundColor: colors?.theme?.greyAlt,
            marginTop: spacing.medium,
          }}
        />
        <View
          style={{
            paddingTop: spacing.xxlarge,
            paddingBottom: spacing.xlarge,
          }}>
          <View
            style={{
              borderRadius: layout?.borderRadius,
              marginBottom: spacing?.large,
              flexDirection: 'row',
              justifyContent: 'space-around',
              gap: spacing.medium,
            }}>
            <TouchableOpacity
              style={styles?.btnWrap}
              onPress={() => {
                imageChange('camera');
              }}>
              <MyIcons name={'camera'} size={43} />
              <CustomText
                font={fonts.q.regular}
                text="Camera"
                color={colors.text.black}
                size={font.medium}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles?.btnWrap]}
              onPress={() => {
                imageChange('gallery');
              }}>
              <MyIcons name={'gallery'} size={39} />
              <CustomText
                text="Gallery"
                color={colors.text.black}
                font={fonts.q.regular}
                size={font.medium}
              />
            </TouchableOpacity>

            {uploadVideo && (
              <MainButton
                onPress={() => {
                  imageChange('video');
                }}
                title={'Upload A Video'}
                textStyle={styles?.buttonText}
                style={{marginTop: spacing?.small, alignSelf: 'center'}}
              />
            )}
          </View>
        </View>
      </ActionSheet>
    </>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: colors?.text?.white,
    textDecorationLine: 'underline',
  },
  btnWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.small,
  },
});
