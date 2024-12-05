import {appShadow, colors} from '../../theme/colors';
import {vh, vw} from '../../theme/units';

import {StyleSheet} from 'react-native';
import {font, spacing} from '../../theme/styles';

const styles = StyleSheet.create({
  checkContainer: {
    backgroundColor: colors.background.primary,
    height: vh * 2,
    width: vh * 2,
    borderWidth: 1,
    borderColor: colors.theme.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.smallh,
    borderRadius: vh * 0.5,
  },
  check: {
    height: vh * 1.15,
    width: vh * 1.15,
    resizeMode: 'contain',
    tintColor: colors.theme.primary + '99',
  },
  text: {
    color: colors.text.placeholder,
    fontSize: font.small,
  },
});
export default styles;
