//React and React Native imports
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import landingStyles from "./lading.styles";

//Third party Libraries
import { LinearGradient } from "expo-linear-gradient";

//Project Resources
import Onboarding from "./screens/Onboarding/Onboarding";
import Slider from "@/components/Slider/Slider";

// export default function Index() {
//   return (
//     <GestureHandlerRootView>
//       <LinearGradient colors={["#2282FF", "#326aee"]}>
//         <Onboarding />
//       </LinearGradient>
//     </GestureHandlerRootView>
//   );
// }

export default function Landing() {
  return (
    <>
      <GestureHandlerRootView>
        <View style={landingStyles.container}>
          <Slider />
        </View>
      </GestureHandlerRootView>
      {/* <View style={landingStyles.container}>
        <View style={landingStyles.upperContent}>
          <Text>Welcome! 🌈 </Text>
        </View>
        <View style={landingStyles.middleContent}>
          <Text>
            This is a simple repo that emulates a login authentication workflow
            using Expo Router, focused on the navigation aspect.
          </Text>
        </View>
        <View style={landingStyles.bottomContent}>
          <Text>
            This is a simple repo that emulates a login authentication workflow
            using Expo Router, focused on the navigation aspect.
          </Text>
        </View>
      </View> */}
    </>
  );
}
