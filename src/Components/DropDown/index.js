import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { LabelComponent } from "../InputField";
import { font, layout, spacing } from "../../theme/styles";
import { vh, vw } from "../../theme/units";
import { colors } from "../../theme/colors";
import MyIcons from "../MyIcons";
import fonts from "../../Assets/fonts";
import CustomText from "../wrappers/Texts/CustomText";

const DropDown = ({
  options,
  label,
  placeholder,
  required,
  leftIcon,
  customStyles,
  callback,
  errors,
  customWidth,
}) => {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Category 1" },
    { key: "2", value: "Category 2" },
    { key: "3", value: "Category 3" },
    { key: "4", value: "Category 4" },
  ];

  return (
    <View
      style={[
        {
          width: customWidth ? customWidth : "95%",
          // paddingHorizontal: spacing.small + 3,
          paddingBottom: spacing.medium,
        },
        customStyles,
      ]}
    >
      {label && <LabelComponent label={label} required={required} />}
      <SelectList
        onSelect={() => callback(selected)}
        placeholder={placeholder}
        setSelected={setSelected}
        fontFamily="lato"
        data={options ? options : data}
        search={false}
        boxStyles={styles.boxContainer}
        arrowicon={<MyIcons name={"down"} size={font.large} />}
        lefticon={leftIcon}
        dropdownStyles={styles.dropDownContainer}
        inputStyles={{
          color: colors.text.white,
          fontFamily: fonts.q.regular,
        }}
        dropdownTextStyles={{ color: colors.text.placeholder }}
      />
      {errors && (
        <CustomText
          text={"Gender is required"}
          color="red"
          size={font.small}
          style={{ marginTop: spacing.xsmall }}
        />
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  boxContainer: {
    height: vh * 6.5,
    borderRadius: layout.borderRadius,
    backgroundColor: colors.input.background,
    borderColor: colors.input.background,
    paddingHorizontal: spacing.small + 3,
    alignItems: "center",
  },
  dropDownContainer: {
    backgroundColor: colors.input.background,
    borderColor: colors.input.background,
  },
});
