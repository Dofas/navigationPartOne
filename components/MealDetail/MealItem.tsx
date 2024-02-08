import React from "react";
import { StyleSheet, Text, View } from "react-native";

type MealItem = {
  text: string;
};

const MealItem = ({ text }: MealItem) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemText}>{text}</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  listItemContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#b9a1a1"
  },
  listItemText: {
    color: "#351515",
    textAlign: "center"
  }
});
