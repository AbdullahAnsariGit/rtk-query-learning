import {spacing} from '../../../theme/styles';
import {vh, vw} from '../../../theme/units';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: vh * 20.5,
    width: vh * 32.5,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.medium,
  },
  datePicker: {
    width: vw * 45.5,
  },
});
export default styles;
