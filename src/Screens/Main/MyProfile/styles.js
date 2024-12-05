import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {vh, vw} from '../../../theme/units';
import {font, layout, spacing, weight} from '../../../theme/styles';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: spacing.xxlarge,
    paddingHorizontal: spacing.largeh,
    width: layout.contentWidth,
    alignSelf: 'center',
  },
  profileStyles: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  labelStyles: {
    // fontSize: font?.large,
    fontWeight: weight.xxlarge,
  },
  labelValStyles: {
    // fontWeight: weight?.small,
    fontSize: font?.medium,
  },
  interestStyles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing?.small,
  },
  singleInterest: {
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    borderWidth: 1,
    borderColor: colors?.theme?.borderColor,
    borderRadius: 6,
  },
  tabsStyles: {
    flexDirection: 'row',
    gap: spacing?.large,
    paddingVertical: spacing?.medium,
  },
  mediaImagesStyles: {
    height: vw * 40,
    flex: 2,
    borderRadius: 20,
  },
});
