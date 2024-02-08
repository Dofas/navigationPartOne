import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
  MealsCategoriesScreen: undefined;
  MealsScreen: {
    categoryId: string;
  };
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
