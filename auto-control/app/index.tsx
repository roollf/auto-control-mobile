//React and React Native imports
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import landingStyles from "./lading.styles";

//Third party Libraries
import { LinearGradient } from "expo-linear-gradient";

//Project Resources
import Slider from "@/components/Slider/Slider";

export default function Landing() {
  return (
    <>
      <GestureHandlerRootView>
        <View style={landingStyles.container}>
          <LinearGradient colors={["#2282FF", "#326aee"]}>
            <Slider />
          </LinearGradient>
        </View>
      </GestureHandlerRootView>
    </>
  );
}
