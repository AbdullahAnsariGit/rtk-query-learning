import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {layout, spacing, font} from '../../../theme/styles';
import {vh, vw} from '../../../theme/units';

export const styles = StyleSheet.create({
  inputContainer: {
    ...layout.flexRow,
    height: vh * 16,
    borderRadius: layout.borderRadius,
    paddingHorizontal: spacing.large,
    backgroundColor: colors.input.background,
    justifyContent: 'center',
  },
  asterisk: {color: colors.text.red},
  inputStyle: {
    fontSize: font.small,
    color: colors.text.primary,
    flex: 1,
  },
  uploadWrap: {
    flexDirection: 'row',
    gap: spacing.small,
  },
  colorBtn: {
    width: (vw * 90) / 7,
    height: vw * 14,
    backgroundColor: 'red',
    borderRadius: layout.borderRadius,
  },
  colorWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    color: colors.text.red,
    marginLeft: vw * 1,
    fontSize: vh * 1.5,
    fontStyle: 'italic',
    marginBottom: spacing.medium,
    marginTop: vh * 0.5,
  },
});
