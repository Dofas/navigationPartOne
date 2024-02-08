import { useNavigation } from "@react-navigation/native";
import CategoryGridTile from "components/MealsCategories/CategoryGridTile";
import { CATEGORIES } from "data/dummy-data";
import { CategoryType } from "models/category";
import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { HomeMealsScreenNavigationProp } from "routes/HomeStackNavigator/HomeStackNavigator.types";

const MealsCategoriesScreen = () => {
  const { navigate } = useNavigation<HomeMealsScreenNavigationProp>();

  function renderCategoryItem({
    item: categoryItem
  }: ListRenderItemInfo<CategoryType>) {
    function pressHandler() {
      navigate("MealsScreen", { categoryId: categoryItem.id });
    }

    return (
      <CategoryGridTile
        title={categoryItem.title}
        color={categoryItem.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => "#" + item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </>
  );
};

export default MealsCategoriesScreen;
