import MealsList from "components/Meals/MealsList";
import { MEALS } from "data/dummy-data";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFavouriteContext } from "store/context/favourite-context";
import { useAppSelector } from "store/redux/hooks";

const Favourites = () => {
  // const { favouriteIds } = useFavouriteContext();
  const { favouriteIds } = useAppSelector((state) => state.favoriteMeals);

  const displayedMeals = MEALS.filter((meal) => favouriteIds.includes(meal.id));

  if (!displayedMeals.length) {
    return (
      <View style={styles.emptyTextContainer}>
        <Text style={styles.emptyText}>You have no favourites meals</Text>
      </View>
    );
  }

  return <MealsList items={displayedMeals} />;
};

export default Favourites;

const styles = StyleSheet.create({
  emptyTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});
