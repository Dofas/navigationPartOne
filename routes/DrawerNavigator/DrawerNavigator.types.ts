import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";

export type DrawerParamList = {
  MealsCategoriesScreen: undefined;
  Favourites: undefined;
};

export type DrawerMealsCategoriesScreenNavigationProp = DrawerNavigationProp<
  DrawerParamList,
  "MealsCategoriesScreen"
>;

export type HomeDrawerMealsCategoriesScreenRoute = RouteProp<
  DrawerParamList,
  "MealsCategoriesScreen"
>;

export type DrawerFavouritesNavigationProp = DrawerNavigationProp<
  DrawerParamList,
  "Favourites"
>;

export type HomeDrawerFavouritesRoute = RouteProp<
  DrawerParamList,
  "Favourites"
>;
