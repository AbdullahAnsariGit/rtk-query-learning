import {StyleSheet} from 'react-native';
import {vw} from '../../../theme/units';
import {spacing} from '../../../theme/styles';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profiles: {
    height: vw * 14,
    width: vw * 14,
    borderRadius: vw * 14,
  },
  profileWrap: {
    padding: spacing.small,
    backgroundColor: colors.background.background,
    height: vw * 17,
    width: vw * 17,
    borderRadius: vw * 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors?.border.border,
  },
});

export default styles;
