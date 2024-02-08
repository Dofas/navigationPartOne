import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type SubTitleProps = {
  children: ReactNode;
};

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#b9a1a1",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  subTitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#b9a1a1"
  }
});
