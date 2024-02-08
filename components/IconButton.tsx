import { Ionicons } from "@expo/vector-icons";
import React, { ComponentProps } from "react";
import { Pressable, StyleSheet } from "react-native";

type IconButtonProps = {
  icon: ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
  color: string;
};

const IconButton = ({ icon, onPress, color }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
});
