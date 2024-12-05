import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {spacing, layout} from '../../theme/styles';
import {vh} from '../../theme/units';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  modal: {
    width: '100%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    top: Platform.OS == 'ios' ? 13 : 20,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    backgroundColor: colors?.theme.black,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    gap: spacing.medium,
  },
  header: {
    backgroundColor: colors?.theme.white,
    paddingBottom: 10,
  },
  topIcon: {
    borderRadius: 10,
    paddingVertical: 4,
    width: '25%',
    backgroundColor: colors?.theme.gray,
    alignSelf: 'center',
  },
  logoStyles: {
    height: height * 0.1,
    width: height * 0.1,
  },
  successPopupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 20,
  },
  packageBtnsPopupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 20,
  },
  lineSeparator: {
    height: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.theme.gray,
    width: '90%',
    alignSelf: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  titleWrapper: {
    alignSelf: 'center',
  },
  //dropdown
  datepickerBtnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  datepickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: colors?.theme.white,
    borderWidth: 1,
    borderColor: colors?.theme.lightGray,
  },
  gradientContainer: {
    width: layout.contentWidth - spacing.medium,
    borderRadius: vh * 1.3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    height: vh * 10,
    width: layout.contentWidth - spacing.medium,
    borderRadius: vh * 1.3,
  },
  btnContainer1: {
    height: vh * 10,
    width: layout.contentWidth - spacing.medium,
    borderRadius: vh * 1.3,
    borderWidth: 1,
    borderColor: colors.theme.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.background.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
