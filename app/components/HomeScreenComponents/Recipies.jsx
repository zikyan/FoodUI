import { View, Text, Image, Pressable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import MasonryList from "react-native-masonry-list";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Recipies = ({ category }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "rubik-medium",
          fontSize: hp(3.5),
          marginTop: hp(1),
        }}
      >
        Recipies
      </Text>
      {/* <FlatList
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        data={category}
        keyExtractor={(item) => item.idCategory}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} />}
        onEndReachedThreshold={0.5}
      /> */}
      {/* <View style={{ flex: 1 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={category}
          keyExtractor={(item) => item.idCategory}
          numColumns={2}
          renderItem={({ item }) => <Card item={item} />}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      </View> */}
    </View>
  );
};

const Card = ({ item }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable style={{ width: "100%" }}>
        <Image
          source={{ uri: item.strCategoryThumb }}
          style={{
            width: hp(20),
            height: hp(20),
            borderRadius: 10,
            backgroundColor: "grey",
          }}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default Recipies;
