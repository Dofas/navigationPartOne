import { useNavigation } from "@react-navigation/native";
import MealSubInfo from "components/MealSubInfo";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { HomeMealDetailScreenNavigationProp } from "routes/HomeNavigator/HomeNavigator.types";

type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability
}: MealItemProps) => {
  const navigation = useNavigation<HomeMealDetailScreenNavigationProp>();

  const onMealItemPress = () => {
    navigation.navigate("MealDetailScreen", { mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={onMealItemPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealSubInfo
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    // android shadow
    elevation: 4,
    // ios shadow
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible"
  },
  buttonPressed: {
    opacity: Platform.OS === "android" ? 1 : 0.5
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
});
