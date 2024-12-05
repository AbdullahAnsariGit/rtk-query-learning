import {StyleSheet} from 'react-native';
import {layout, spacing} from '../../../theme/styles';
import {vh} from '../../../theme/units';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.medium,
  },
  cardWrap: {
    gap: spacing.medium,
    paddingTop: spacing.medium,
  },
  cardlist: {
    paddingHorizontal: spacing.large,
    flexDirection: 'row',
    gap: spacing.medium,
    alignItems: 'center',
    borderRadius: layout.borderRadius,
    height: vh * 11,
  },
});

export default styles;
