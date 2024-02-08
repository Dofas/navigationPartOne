import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeStackNavigatorParamList } from "routes/HomeNavigator/HomeNavigator.types";
import MealDetailScreen from "screens/MealDetailScreen";
import MealsCategoriesScreen from "screens/MealsCategoriesScreen";
import MealsScreen from "screens/MealsScreen";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351515" },
        headerTintColor: "#cccccc",
        contentStyle: { backgroundColor: "#563232" }
      }}
    >
      <HomeStack.Screen
        name="MealsCategoriesScreen"
        options={{
          title: "All categories"
        }}
        component={MealsCategoriesScreen}
      />
      <HomeStack.Screen
        name="MealsScreen"
        component={MealsScreen}
        // options={({ route, navigation }) => {
        //   const { categoryId } = route.params;
        //   return {
        //     title: categoryId,
        //     headerBackTitleVisible: false
        //   };
        // }}
      />
      <HomeStack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        // options={{
        //   headerRight: () => {
        //     return <Button title="Tap" />;
        //   }
        // }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
