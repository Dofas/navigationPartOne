import React from "react";
import { MEALS } from "../data/dummy-data";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { HomeMealsScreenRouteProp } from "routes/HomeNavigator.types";
import { MealType } from "models/meal";
import MealItem from "components/MealItem";

const MealsScreen = () => {
  const route = useRoute<HomeMealsScreenRouteProp>();
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) > -1
  );

  function renderMealItem({ item }: ListRenderItemInfo<MealType>) {
    return <MealItem title={item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
