import { View, Text, TextInput, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const SearchBar = () => {
  return (
    <View style={styles.parentContainer}>
      <TextInput
        style={{
          height: hp(5),
          borderColor: "gray",
          borderWidth: 0,
          padding: hp(1),
          borderRadius: 10,
          flex: 1,
        }}
        placeholder="Search for food..."
      />
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 100,
          padding: hp(0.5),
          marginRight: hp(1),
        }}
      >
        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={2} color={"grey"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    marginTop: hp(2),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
});
export default SearchBar;
