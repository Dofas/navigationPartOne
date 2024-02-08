import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStackNavigator from "routes/HomeStackNavigator/HomeStackNavigator";
import HomeBottomTabsNavigator from "routes/test/HomeBottomTabsNavigator/HomeBottomTabsNavigator";
import HomeDrawerNavigator from "routes/test/HomeDrawerNavigator/HomeDrawerNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
      {/* <HomeDrawerNavigator />*/}
      {/* <HomeBottomTabsNavigator />*/}
    </NavigationContainer>
  );
};

export default RootNavigator;
