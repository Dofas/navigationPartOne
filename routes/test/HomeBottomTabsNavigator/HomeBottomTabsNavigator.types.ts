import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

export type HomeBottomTabsParamList = {
  Welcome: undefined;
  User: undefined;
};

export type HomeDrawerWelcomeNavigationProp = BottomTabNavigationProp<
  HomeBottomTabsParamList,
  "Welcome"
>;

export type HomeDrawerWelcomeRoute = RouteProp<
  HomeBottomTabsParamList,
  "Welcome"
>;

export type HomeDrawerUserNavigationProp = BottomTabNavigationProp<
  HomeBottomTabsParamList,
  "User"
>;

export type HomeDrawerUserRoute = RouteProp<HomeBottomTabsParamList, "User">;
