import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { HomeStackNavigatorParamList } from "./HomeNavigator";

export type HomeMealsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "MealsScreen"
>;

export type HomeMealsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "MealsScreen"
>;
