// import React from 'react';
// import {View} from 'react-native';
// import Animated, {FadeOut, SlideInRight} from 'react-native-reanimated';
// import {colors} from '../../../theme/colors';
// import MyIcons from '../../MyIcons';
// import CustomText from '../../wrappers/Texts/CustomText';
// import styles from './styles';
// import {font} from '../../../theme/styles';
// import fonts from '../../../Assets/fonts';

// const RowCard = ({style}) => {
//   return (
//     <Animated.View
//       style={[styles.container, style]}
//       exiting={FadeOut.duration(600)}
//       entering={SlideInRight.duration(200)}>
//       <View style={styles.header}>
//         <View style={styles.col1}>
//           <View style={styles?.iconWrap}>
//             <MyIcons name={'raffles'} size={26} />
//           </View>
//         </View>
//         <View style={styles.col2}>
//           <CustomText text="Raffle 01" />
//           <CustomText text="MC45213" />
//         </View>
//         <View style={styles.col3}>
//           <View style={styles.fundWrap}>
//             <CustomText
//               text="Fund raising"
//               color={colors.text.white}
//               size={font.xsmall}
//               font={fonts.e.light}
//             />
//           </View>
//           <CustomText text="30 Feb 2024" />
//         </View>
//       </View>
//       <View style={styles.row2}>
//         <View style={styles.row2Col1}>
//           <CustomText text="Ticket Cost" />
//           <CustomText text="$30.00" />
//         </View>
//         <View style={styles.row2Col2}>
//           <CustomText text="Ticket Cost" />
//           <CustomText text="$30.00" />
//         </View>
//         <View style={styles.row2Col3}>
//           <CustomText text="Ticket Cost" />
//           <CustomText text="$30.00" />
//         </View>
//       </View>
//     </Animated.View>
//   );
// };

// export default RowCard;

import React from 'react';
import {View} from 'react-native';
import Animated, {FadeInUp, FadeOut} from 'react-native-reanimated';
import fonts from '../../../Assets/fonts';
import {colors} from '../../../theme/colors';
import {font} from '../../../theme/styles';
import MyIcons from '../../MyIcons';
import CustomText from '../../wrappers/Texts/CustomText';
import styles from './styles';

const RowCard = ({
  name,
  code,
  date,
  ticketCost,
  ticketQty,
  ticketWinPrize,
  style,
}) => {
  return (
    <Animated.View
      style={[styles.container, style]}
      exiting={FadeOut.duration(600)}
      entering={FadeInUp.duration(1600)}>
      <View style={styles.header}>
        <View style={styles.col1}>
          <View style={styles.iconWrap}>
            <MyIcons name={'raffles'} size={26} />
          </View>
        </View>
        <View style={styles.col2}>
          <CustomText text={name} />
          <CustomText
            text={`MC${code}`}
            size={font.xsmall}
            font={fonts.e.light}
            style={{marginTop: 4}}
            color={colors?.text?.placeholder}
          />
        </View>
        <View style={styles.col3}>
          {/* <View style={styles.fundWrap}>
            <CustomText
              text="Fund raising"
              color={colors.text.white}
              size={font.xsmall}
              font={fonts.e.light}
            />
          </View> */}
          <CustomText
            text={date}
            color={colors.text.white}
            size={font.xsmall}
            font={fonts.e.light}
            style={{marginTop: 4}}
          />
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.row2Col1}>
          <CustomText text="Ticket Cost" />
          <CustomText text={ticketCost} />
        </View>
        <View style={styles.row2Col2}>
          <CustomText text="Qty" />
          <CustomText text={ticketQty} />
        </View>
        <View style={styles.row2Col3}>
          <CustomText text="Winning Prize" />
          <CustomText text={ticketWinPrize} />
        </View>
      </View>
    </Animated.View>
  );
};

export default RowCard;
