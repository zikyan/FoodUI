import { View, Text } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const TextBar = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "rubik-medium",
          fontSize: hp(1.8),
          marginTop: hp(2),
        }}
      >
        Hello Zikyan!
      </Text>
      <Text
        style={{
          fontFamily: "rubik-medium",
          fontSize: hp(3.5),
          paddingTop: hp(1),
          paddingBottom: hp(1),
        }}
      >
        Make your own Food,
      </Text>
      <Text style={{ fontFamily: "rubik-medium", fontSize: hp(3.5) }}>
        stay at <Text style={{ color: "orange" }}>Home</Text>
      </Text>
    </View>
  );
};
export default TextBar;
