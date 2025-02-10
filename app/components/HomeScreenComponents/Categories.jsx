import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, {FadeInDown} from "react-native-reanimated";

const Categories = ({category, activeCategory, setActiveCategory}) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        {category.map((item, index) => {
          let isActive= item.strCategory==activeCategory
          return (
            <TouchableOpacity key={index} style={[{ margin: hp(1), alignItems: "center" }]} onPress={() => setActiveCategory(item.strCategory)}>
              <Image
                source={{ uri: item.strCategoryThumb }}
                style={[{ width: hp(7), height: hp(7), borderRadius: 100 }, isActive ? styles.isActive : styles.notActive]}
                resizeMode="contain"
              />
              <Text style={{fontFamily: 'rubik-medium', color: 'grey', marginTop: 4}}>{item.strCategory}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

const styles = {
  isActive: {
    backgroundColor: "orange",
  },
  notActive: {
    backgroundColor: "grey",
    color: "black",
  },
}

export default Categories;
