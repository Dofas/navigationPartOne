import { useNavigation, useRoute } from "@react-navigation/native";
import MealsList from "components/Meals/MealsList";
import { CATEGORIES, MEALS } from "data/dummy-data";
import React, { useLayoutEffect } from "react";
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

  return <MealsList items={displayedMeals} />;
};

export default MealsScreen;
