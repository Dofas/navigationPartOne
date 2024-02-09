import MealItem from "components/Meals/MealItem";
import { MealType } from "models/meal";
import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

type MealsListProps = {
  items: MealType[];
};

const MealsList = ({ items }: MealsListProps) => {
  function renderMealItem({ item }: ListRenderItemInfo<MealType>) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
