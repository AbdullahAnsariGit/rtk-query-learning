import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../Main";
import Auth from "../Auth";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const ParentNavigator = () => {
  const token = useSelector((state) => state?.auth?.token);
  console.log("TOKEEEEN    +==========>>>>>>>>>>", token);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_left",
        gestureEnabled: true,
        animationDuration: "600",
      }}
    >
      {/* {token ? ( */}
      <Stack.Screen component={Main} name="MainNavigator" />
      {/* )
       : (
        <Stack.Screen component={Auth} name="AuthNavigator" />
      )} */}
    </Stack.Navigator>
  );
};

export default ParentNavigator;
