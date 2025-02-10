import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import React, {useEffect, useState} from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import TopBar from "../components/HomeScreenComponents/TopBar";
import TextBar from "../components/HomeScreenComponents/TextBar";
import SearchBar from "../components/HomeScreenComponents/SearchBar";
import Categories from "../components/HomeScreenComponents/Categories";
import axios from "axios";

const HomeScreen = () => {
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Beef");
  const getCagegories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setCategory(response.data.categories);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCagegories();
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView style={styles.scrollViewContainer}>
        <TopBar />
        <TextBar />
        <SearchBar />
        {category.length>0 && <Categories category={category} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContainer: {
    padding: hp(2),
    paddingTop: 0,
  },
  view1Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default HomeScreen;
