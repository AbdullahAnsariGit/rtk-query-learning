import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import SyneBold from '../../../Components/wrappers/Texts/SyneBold';
import {font, spacing} from '../../../theme/styles';
import SyneRegular from '../../../Components/wrappers/Texts/SyneRegular';
import Container from '../../../Components/Container';
import CustomHeader from '../../../Components/CustomHeader';
import routes from '../../../Navigation/routes';
import {colors} from '../../../theme/colors';
import Background from '../../../Components/Background';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import fonts from '../../../Assets/fonts';

export default function TermAndConditions() {
  useFocusEffect(
    useCallback(() => {
      // NavService.closeDrawer();
    }, []),
  );
  const termsAndConditions = [
    {
      title: '1- Information Collection and use:',
      desc: `Lorem Ipsum is simply dummy text of the print and
typesetting industry. Lorem Ipsum has been the only
industry's standard dummy text ever since the when
an unknown printer took a galley of type and scram
able it to make a type specimen book. It has survived not only five centuries, but also the
leap into electronic typesetting, remaining essential
software unchanged. It was popularised in the with the release of Letter
set sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like
Aldus Page Maker including versions.`,
    },
    {
      title: '2- Information Collection and use:',
      desc: `Lorem Ipsum is simply dummy text of the print and
typesetting industry. Lorem Ipsum has been the only
industry's standard dummy text ever since the when
an unknown printer took a galley of type and scram
able it to make a type specimen book. It has survived not only five centuries, but also the
leap into electronic typesetting, remaining essential
software unchanged. It was popularised in the with the release of LetterÏ
set sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like
Aldus Page Maker including versions.`,
    },
    {
      title: '3- Information Collection and use:',
      desc: `Lorem Ipsum is simply dummy text of the print and
  typesetting industry. Lorem Ipsum has been the only
  industry's standard dummy text ever since the when
  an unknown printer took a galley of type and scram
  able it to make a type specimen book. It has survived not only five centuries, but also the
  leap into electronic typesetting, remaining essential
  software unchanged. It was popularised in the with the release of LetterÏ
  set sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like
  Aldus Page Maker including versions.`,
    },
    {
      title: '4- Information Collection and use:',
      desc: `Lorem Ipsum is simply dummy text of the print and
  typesetting industry. Lorem Ipsum has been the only
  industry's standard dummy text ever since the when
  an unknown printer took a galley of type and scram
  able it to make a type specimen book. It has survived not only five centuries, but also the
  leap into electronic typesetting, remaining essential
  software unchanged. It was popularised in the with the release of LetterÏ
  set sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like
  Aldus Page Maker including versions.`,
    },
  ];
  return (
    <Background>
      <CustomHeader routeName={routes.main.termAndConditions} />
      <Container>
        <View style={{marginBottom: spacing.xxlarge}}>
          {termsAndConditions?.map((item, index) => (
            <View
              key={index}
              style={{paddingVertical: spacing.small, gap: spacing.small}}>
              <CustomText
                text={item?.title}
                font={fonts.m.regular}
                style={{paddingVertical: spacing.small, fontSize: font.large}}
              />
              <CustomText
                text={item?.desc}
                font={fonts.q.regular}
                style={{
                  marginLeft: spacing.small,
                  color: colors?.text?.altGrey,
                }}
                size={font.medium}
              />
            </View>
          ))}
        </View>
      </Container>
    </Background>
  );
}
