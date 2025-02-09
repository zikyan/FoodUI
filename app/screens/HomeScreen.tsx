import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import TopBar from "../components/HomeScreenComponents/TopBar";
import TextBar from "../components/HomeScreenComponents/TextBar";
import SearchBar from "../components/HomeScreenComponents/SearchBar";
import Categories from "../components/HomeScreenComponents/Categories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView style={styles.scrollViewContainer}>
        <TopBar />
        <TextBar />
        <SearchBar />
        <Categories />
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
