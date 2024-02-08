import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DrawerNavigator from "routes/DrawerNavigator/DrawerNavigator";
import { HomeStackNavigatorParamList } from "routes/HomeStackNavigator/HomeStackNavigator.types";
import MealDetailScreen from "screens/MealDetailScreen";
import MealsScreen from "screens/MealsScreen";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351515" },
        headerTintColor: "#cccccc",
        contentStyle: { backgroundColor: "#563232" }
      }}
    >
      <HomeStack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          headerTitle: "All categories"
        }}
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

export default HomeStackNavigator;
