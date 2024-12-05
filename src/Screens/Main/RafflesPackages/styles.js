import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../theme/units';
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
  ticketsCount: {
    backgroundColor: colors.theme.secondary,
    height: vh * 4,
    width: vh * 4,
    borderRadius: vh * 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  ticketWrap: {
    flexDirection: 'row',
    position: 'relative',
  },
  ticketCardContainer: {
    height: vh * 32,
    alignItems: 'center',
    position: 'relative',
    gap: spacing.small,
    paddingTop: spacing.large,
  },
  ticketBuy: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: '100%',
  },
});

export default styles;
