import {appShadow, colors} from '../../theme/colors';
import {font, layout, spacing} from '../../theme/styles';

import {StyleSheet} from 'react-native';
import {vh, vw} from '../../theme/units';
import fonts from '../../Assets/fonts';

const styles = StyleSheet.create({
  container: {
    width: layout.contentWidth,
    marginBottom: spacing.medium,
    paddingHorizontal: spacing.mediumh,
  },
  label: {
    marginLeft: spacing.largeh,
    marginBottom: spacing.small,
    color: colors.theme.primary,
    fontSize: font.large,
  },
  leftIcon: {
    marginHorizontal: spacing.small,
  },
  multilineContainer: {height: vh * 18, alignItems: 'flex-start'},
  multiline: {textAlignVertical: 'top'},
  inputContainer: {
    ...layout.flexRow,
    height: vh * 6.5,
    justifyContent: 'space-between',
    borderRadius: layout.borderRadius,
    paddingHorizontal: spacing.mediumh,
    backgroundColor: colors.input.background,
    borderColor: colors.input.border,
    borderWidth: layout.borderWidth,
  },
  asterisk: {color: colors.text.red},
  inputStyle: {
    fontSize: font.medium,
    color: colors.text.primary,
    fontFamily: fonts.q.regular,
    flex: 1,
  },
  eye: {
    height: vh * 1.75,
    width: vh * 1.75,
    marginHorizontal: spacing.smallh,
  },
  rightIcon: {
    height: vh * 1.25,
    width: vh * 1.25,
    marginHorizontal: spacing.smallh,
  },
  highlightEye: {tintColor: colors.theme.primary + 'dd'},
  focusedContainer: {
    borderColor: colors.theme.primary + '88',
    borderWidth: 1,
  },
  error: {
    color: colors.text.red,
    marginTop: vh * 0.5,
    marginLeft: vw * 1,
    fontSize: vh * 1.5,
    fontStyle: 'italic',
  },
});
export default styles;
