import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
// import Video from 'react-native-video';
import {vh} from '../../theme/units';
import {layout} from '../../theme/styles';
import MyIcons from '../MyIcons';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const background = require('../../Assets/Video/office.mp4');
  // const poster = require('../../Assets/Images/media4.png');
  const [isPaused, setIsPaused] = useState(true);

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <View style={styles.container}>
      {/* Video Component */}
      {/* <Video
        source={background}
        ref={videoRef}
        style={styles.backgroundVideo}
        paused={isPaused}
        resizeMode="cover"
        poster={poster}
        posterResizeMode="cover"
      /> */}

      {/* Overlay for play/pause */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={!isPaused ? togglePlayPause : () => {}}
        style={[
          styles?.backdrop,
          !isPaused && {backgroundColor: 'transparent'},
        ]}>
        {isPaused && (
          <TouchableOpacity
            style={styles.overlay}
            onPress={isPaused ? togglePlayPause : () => {}}>
            <MyIcons name={'pause'} size={50} color="white" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: vh * 26,
    borderRadius: layout.borderRadius,
    overflow: 'hidden',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    borderRadius: layout.borderRadius,
  },
  overlay: {
    position: 'absolute',
  },
  backdrop: {
    position: 'absolute',
    height: vh * 26,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: layout.borderRadius,
  },
});

export default VideoPlayer;
