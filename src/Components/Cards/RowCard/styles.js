import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../theme/units';
import {font, layout, spacing} from '../../../theme/styles';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    padding: spacing.small,
    marginBottom: spacing.small,
    borderWidth: 1,
    borderColor: colors.border.border,
    borderRadius: spacing.xsmall,
    backgroundColor: colors.background,
    gap: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    backgroundColor: colors.border.border,
    padding: spacing.medium,
    borderRadius: spacing.xsmall,
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 12,
  },
  fundWrap: {
    backgroundColor: colors.theme.secondary,
    padding: spacing.xsmall,
    paddingHorizontal: spacing.small,

    borderRadius: spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  col1: {
    width: '15%',
    justifyContent: 'center',
  },
  col2: {
    width: '55%',
    justifyContent: 'center',
  },
  col3: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  row2: {
    flexDirection: 'row',
    backgroundColor: colors.background.drawerbg,
    padding: spacing.medium,
    borderRadius: layout.borderRadius,
  },
  row2Col1: {
    flex: 1,
    alignItems: 'center',
  },
  row2Col2: {
    flex: 1,
    alignItems: 'center',
  },
  row2Col3: {
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
