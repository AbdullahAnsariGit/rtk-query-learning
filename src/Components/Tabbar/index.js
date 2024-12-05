import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../wrappers/Texts/CustomText';
import {spacing} from '../../theme/styles';
import {colors} from '../../theme/colors';
import MyIcons from '../MyIcons';

const Tabbar = ({onSelected}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = [
    {
      title: 'Ongoing',
    },
    {
      title: 'Pending',
    },
    {
      title: 'Cancelled',
    },
  ];
  return (
    <View style={styles.container}>
      {tabs.map((item, index) => {
        return (
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles?.singleTab}
              onPress={() => {
                setSelectedIndex(index);
                onSelected(tabs[index].title.toUpperCase());
              }}>
              <CustomText text={item?.title} />
            </TouchableOpacity>
            {index === selectedIndex && (
              <View
                style={{
                  width: 40,
                  height: 4,
                  borderRadius: 10,
                  backgroundColor: colors.theme.secondary,
                }}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderColor: '#3a272a',
  },
  singleTab: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.medium,
  },
});
