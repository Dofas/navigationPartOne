import { useNavigation, useRoute } from "@react-navigation/native";
import MealItem from "components/Meals/MealItem";
import { CATEGORIES, MEALS } from "data/dummy-data";
import { MealType } from "models/meal";
import React, { useLayoutEffect } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import {
  HomeMealsScreenNavigationProp,
  HomeMealsScreenRouteProp
} from "routes/HomeStackNavigator/HomeStackNavigator.types";

const MealsScreen = () => {
  const route = useRoute<HomeMealsScreenRouteProp>();
  const navigation = useNavigation<HomeMealsScreenNavigationProp>();
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      // headerBackTitleVisible: false,
      title: categoryTitle
    });
  }, [navigation, categoryId]);

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) > -1
  );

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
