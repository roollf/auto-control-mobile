//React and React Native imports
import { GestureHandlerRootView } from "react-native-gesture-handler";

//Third party Libraries
import { LinearGradient } from "expo-linear-gradient";

//Project Resources
import Onboarding from "./screens/Onboarding/Onboarding";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <LinearGradient colors={["#2282FF", "#326aee"]}>
        <Onboarding />
      </LinearGradient>
    </GestureHandlerRootView>
  );
}
