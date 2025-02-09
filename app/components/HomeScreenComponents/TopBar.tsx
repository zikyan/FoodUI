import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BellIcon } from "react-native-heroicons/outline";

const TopBar = () => {
  return (
    <View style={styles.view1Container}>
      <Image
        source={require("../../../assets/images/avatar.png")}
        style={{ height: hp(5), width: hp(5) }}
      />
      <BellIcon size={hp(3.5)} color={"grey"} />
    </View>
  );
};
const styles = StyleSheet.create({
  view1Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default TopBar;
