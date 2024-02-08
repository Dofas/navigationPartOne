import { useNavigation, useRoute } from "@react-navigation/native";
import IconButton from "components/IconButton";
import MealItem from "components/MealDetail/MealItem";
import SubTitle from "components/MealDetail/SubTitle";
import MealSubInfo from "components/MealSubInfo";
import { MEALS } from "data/dummy-data";
import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  HomeMealDetailScreenNavigationProp,
  HomeMealDetailScreenRouteProp
} from "routes/HomeStackNavigator/HomeStackNavigator.types";

const MealDetailScreen = () => {
  const route = useRoute<HomeMealDetailScreenRouteProp>();
  const navigation = useNavigation<HomeMealDetailScreenNavigationProp>();
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            onPress={headerButtonPressHandler}
            color="white"
          />
        );
      }
    });
  }, [navigation]);

  if (!selectedMeal) {
    return <Text>Sorry we didnt have information about this meal</Text>;
  }

  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps
  } = selectedMeal;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealSubInfo
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <SubTitle>Ingredients</SubTitle>
          {ingredients.map((ingredient) => (
            <MealItem key={ingredient} text={ingredient} />
          ))}
          <SubTitle>Steps</SubTitle>
          {steps.map((step) => (
            <MealItem key={step} text={step} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 300
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white"
  },
  detailText: {
    color: "white"
  },
  outerContainer: {
    alignItems: "center"
  },
  innerContainer: {
    width: "80%"
  }
});
