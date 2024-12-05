import {StyleSheet} from 'react-native';
import {vw} from '../../../theme/units';
import {layout, spacing} from '../../../theme/styles';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  ticketContainer: {
    flexDirection: 'row',
    gap: spacing.medium,
  },
  ticketDealStyles: {
    gap: spacing.small,
    backgroundColor: colors?.background?.drawerbg,
    borderRadius: layout.borderRadius,
    flex: 1,
  },
  ticketSingleBtn: {
    paddingVertical: spacing.large,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
