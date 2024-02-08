import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { DrawerParamList } from "routes/DrawerNavigator/DrawerNavigator.types";
import Favourites from "screens/Favourites";
import MealsCategoriesScreen from "screens/MealsCategoriesScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351515" },
        headerTintColor: "#cccccc",
        sceneContainerStyle: { backgroundColor: "#563232" },
        drawerContentStyle: { backgroundColor: "#563232" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#d3c1c1"
      }}
    >
      <Drawer.Screen
        name="MealsCategoriesScreen"
        component={MealsCategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="list" />;
          }
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="star" />;
          }
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
