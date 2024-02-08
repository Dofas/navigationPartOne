import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";

export type HomeDrawerParamList = {
  Welcome: undefined;
  User: undefined;
};

export type HomeDrawerWelcomeNavigationProp = DrawerNavigationProp<
  HomeDrawerParamList,
  "Welcome"
>;

export type HomeDrawerWelcomeRoute = RouteProp<HomeDrawerParamList, "Welcome">;

export type HomeDrawerUserNavigationProp = DrawerNavigationProp<
  HomeDrawerParamList,
  "User"
>;

export type HomeDrawerUserRoute = RouteProp<HomeDrawerParamList, "User">;
