import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeBottomTabsParamList } from "routes/test/HomeBottomTabsNavigator/HomeBottomTabsNavigator.types";
import UserScreen from "screens/UserScreen";
import WelcomeScreen from "screens/WelcomeScreen";

const BottomTabs = createBottomTabNavigator<HomeBottomTabsParamList>();

const HomeBottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Welcome" component={WelcomeScreen} />
      <BottomTabs.Screen name="User" component={UserScreen} />
    </BottomTabs.Navigator>
  );
};

export default HomeBottomTabsNavigator;
