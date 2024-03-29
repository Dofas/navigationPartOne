import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

type CategoryGridTileProps = {
  title: string;
  color: string;
  onPress: () => void;
};

const CategoryGridTile = ({ title, color, onPress }: CategoryGridTileProps) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
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
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: Platform.OS === "android" ? 1 : 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  }
});

export default CategoryGridTile;
