import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const Categories = () => {
  const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Desserts",
    "Beverages",
  ];
  return (
    <View>
      <Text>Categories</Text>
      <ScrollView>
        {categories.map((category, index) => (
          <Text key={index}>{category}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
