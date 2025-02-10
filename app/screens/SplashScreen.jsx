import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const SplashScreen = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.replace("./screens/HomeScreen"), 2500);
  }, []);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};
export default SplashScreen;
