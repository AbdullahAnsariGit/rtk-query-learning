import React, {forwardRef} from 'react';
import {View, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors} from '../../theme/colors';

const CustomBottomSheet = forwardRef((props, ref) => {
  return (
    <RBSheet
      ref={ref}
      draggable={props?.draggable}
      height={props.height || 300}
      openDuration={props.openDuration || 300}
      closeDuration={props.closeDuration || 200}
      closeOnDragDown={props.closeOnDragDown || true}
      closeOnPressMask={props.closeOnPressMask || true}
      closeOnPressBack={props.closeOnPressBack}
      customStyles={{
        wrapper: {
          // backgroundColor: 'transparent',
          backgroundColor: props.backdropColor || 'rgba(0,0,0,0.8)',
        },
        draggableIcon: {
          backgroundColor: props.draggableIconColor || '#000',
          width: props.topIconWidth || 60,
          height: props.topIconHeight || 6,
        },
        container: {
          backgroundColor: colors?.theme?.black,
          borderTopLeftRadius: props.borderRadius || 20,
          borderTopRightRadius: props.borderRadius || 20,
          ...props.customStyles,
        },
      }}
      onClose={props.onClose}
      onOpen={props.onOpen}>
      <View style={[styles.content, props.contentStyle]}>{props.children}</View>
    </RBSheet>
  );
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomBottomSheet;
