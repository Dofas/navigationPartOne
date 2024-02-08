import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { HomeDrawerUserNavigationProp } from "routes/test/HomeBottomTabsNavigator/HomeBottomTabsNavigator.types";

function WelcomeScreen() {
  // const navigation = useNavigation<HomeDrawerUserNavigationProp>();
  //
  // const navigateToUser = () => {
  //   navigation.navigate("User");
  // };

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>Welcome</Text> screen!
      </Text>
      {/* <Button title="Navigate to user" onPress={navigateToUser} />*/}
    </View>
  );
}

export default WelcomeScreen;

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
