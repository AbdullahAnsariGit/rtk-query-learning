import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {vh} from '../../theme/units';
import {font} from '../../theme/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: vh * 3,
  },
  text: {
    color: colors.text.primary,
    fontSize: font.medium,
  },
});
export default styles;
