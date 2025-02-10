import { Text, View, Image, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import "./globals.css";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function Index() {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);
  const router = useRouter();
  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;
    setTimeout(
      () => (ring1Padding.value = withSpring(ring1Padding.value + hp(2))),
      100
    );
    setTimeout(
      () => (ring2Padding.value = withSpring(ring1Padding.value + hp(2.5))),
      300
    );
    setTimeout(() => router.replace("./screens/HomeScreen"), 2500);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-amber-500">
      <StatusBar barStyle="light-content" />
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2Padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full "
          style={{ padding: ring1Padding }}
        >
          <Image
            source={require("../assets/images/pizza.png")}
            style={{ width: hp(25), height: hp(25) }}
          />
        </Animated.View>
      </Animated.View>
      <View>
        <Text
          style={{ fontSize: hp(7) }}
          className="text-center font-rubik-bold text-white tracking-widest mt-10"
        >
          Food
        </Text>
        <Text
          style={{ fontSize: hp(2.5) }}
          className="text-center font-rubik-bold text-white tracking-widest mt-2"
        >
          Food is always right!
        </Text>
      </View>
    </View>
  );
}
