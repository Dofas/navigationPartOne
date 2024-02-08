import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { HomeDrawerWelcomeNavigationProp } from "routes/test/HomeDrawerNavigator/HomeDrawerNavigator.types";

function UserScreen() {
  // const navigation = useNavigation<HomeDrawerWelcomeNavigationProp>();
  //
  // const openDrawer = () => {
  //   navigation.toggleDrawer();
  // };

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>User</Text> screen!
      </Text>
      {/* <Button title="Open drawer" onPress={openDrawer} />*/}
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064"
  }
});
