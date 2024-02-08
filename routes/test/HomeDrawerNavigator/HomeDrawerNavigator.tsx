import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { HomeDrawerParamList } from "routes/test/HomeDrawerNavigator/HomeDrawerNavigator.types";
import UserScreen from "screens/UserScreen";
import WelcomeScreen from "screens/WelcomeScreen";

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator
    // screenOptions={{
    //   headerStyle: { backgroundColor: "#281717" },
    //   headerTintColor: "purple",
    //   drawerActiveBackgroundColor: "#281717",
    //   drawerActiveTintColor: "white",
    //   drawerStyle: { backgroundColor: "#cccccc" },
    //   drawerIcon: ({ color }) => {
    //     return <Ionicons name="home" color={color} />;
    //   }
    // }}
    >
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          drawerLabel: "Welcome Screen"
        }}
      />
      <Drawer.Screen
        name="User"
        component={UserScreen}
        options={{
          drawerLabel: "User Screen"
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigator;
