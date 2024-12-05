import {StyleSheet} from 'react-native';

import {colors} from '../../theme/colors';
import {font, layout, spacing} from '../../theme/styles';
import {vh, vw} from '../../theme/units';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'transparent',
  },
  contentContainer: {
    height: vh * 10,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 4,
  },
  title: {
    fontSize: vh * 2.5,
    textAlign: 'center',
  },
  expandedHeader: {height: vh * 10.5},
  homeTitle: {
    color: colors.text.white,
    fontSize: vh * 2.5,
    marginBottom: spacing.xsmall,
  },
  postBtn: {
    width: vw * 20,
    height: vh * 3.5,
  },
  homeSubTitle: {
    color: colors.text.white,
    fontSize: font.xsmall,
  },
  searchBtnContainer: {
    backgroundColor: colors.background.primary,
    height: vh * 3,
    width: vh * 3,
    borderRadius: vh * 1.5,
  },
  icon: {
    height: vh * 1.5,
    width: vh * 1.5,
  },
  subTitle: {
    color: colors.text.dimWhite,
    fontSize: font.xsmall,
  },
  backIcon: {
    height: vh * 1.4,
    width: vh * 1.4,
    marginRight: vw * 2.5,
  },
  chatCircle: {
    height: vh * 5,
    width: vh * 5,
    borderRadius: (vh * 5) / 2,
    backgroundColor: colors.theme.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchCircle: {
    height: vh * 5,
    width: vh * 5,
    borderRadius: (vh * 5) / 2,
    backgroundColor: colors.theme.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: vw * 2,
  },
  messageIcon: {
    height: vh * 2.5,
    width: vh * 2.5,
    resizeMode: 'contain',
    tintColor: colors.theme.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: vh * 6.5,
    borderRadius: layout.borderRadius,
    width: vw * 10,
    marginRight: 15,
    backgroundColor: colors?.background?.background,
  },
  userProfileStyles: {
    height: vw * 10,
    width: vw * 10,
    borderRadius: vw * 8,
  },
  hiIconStyles: {
    height: vw * 5,
    width: vw * 5,
  },
});
export default styles;
