import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, ListRenderItem } from "react-native";
import { CategoryType } from "../models/category";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem: ListRenderItem<CategoryType> = ({ item }) => {
  return <CategoryGridTile title={item.title} color={item.color} />;
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => "#" + item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
