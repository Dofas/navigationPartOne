import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsCategoriesScreen from "screens/MealsCategoriesScreen";
import MealsScreen from "screens/MealsScreen";

export type HomeStackNavigatorParamList = {
  MealsCategoriesScreen: undefined;
  MealsScreen: {
    categoryId: string;
  };
};

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MealsCategoriesScreen"
        options={{
          title: "MealsCategoriesScreen"
        }}
        component={MealsCategoriesScreen}
      />
      <HomeStack.Screen
        name="MealsScreen"
        component={MealsScreen}
        options={{
          title: "MealsScreen",
          headerBackTitle: "Back"
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
