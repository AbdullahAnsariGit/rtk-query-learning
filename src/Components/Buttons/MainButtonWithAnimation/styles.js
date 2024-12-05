import {font, layout, spacing} from '../../../theme/styles';

import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {vh} from '../../../theme/units';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: vh * 6.5,
    borderRadius: layout.borderRadius,
    width: layout.contentWidth - spacing.xlarge,
    backgroundColor: colors.theme.secondary,
  },
  textStyle: {
    fontSize: font.xsmall,
    color: colors.text.white,
  },
});
export default styles;
