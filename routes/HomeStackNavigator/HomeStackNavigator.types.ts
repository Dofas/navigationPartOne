import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
  MealsScreen: {
    categoryId: string;
  };
  Drawer: undefined;
  MealDetailScreen: {
    mealId: string;
  };
};

export type HomeMealsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "MealsScreen"
>;

export type HomeMealsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "MealsScreen"
>;

export type HomeMealDetailScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  "MealDetailScreen"
>;

export type HomeMealDetailScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  "MealDetailScreen"
>;
