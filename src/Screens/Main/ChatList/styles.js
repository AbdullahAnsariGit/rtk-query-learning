import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/styles';

export const styles = StyleSheet.create({
  btnSearch: {
    backgroundColor: colors?.input?.background,
    width: '94%',
    flexDirection: 'row',
    gap: spacing.small,
    paddingHorizontal: spacing.medium,
    alignItems: 'center',
    paddingVertical: spacing.medium,
    borderRadius: 14,
    marginVertical: spacing.small,
    alignSelf: 'center',
  },
});
