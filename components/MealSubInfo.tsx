import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type MealDetailProps = {
  duration: number;
  complexity: string;
  affordability: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const MealSubInfo = ({
  duration,
  complexity,
  affordability,
  containerStyle,
  textStyle
}: MealDetailProps) => {
  return (
    <View style={[styles.details, containerStyle]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealSubInfo;

const styles = StyleSheet.create({
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
