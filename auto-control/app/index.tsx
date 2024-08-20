import Onboarding from "./screens/Onboarding/Onboarding";
import { LinearGradient } from "expo-linear-gradient";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Index = () => {
  return (
    <GestureHandlerRootView>
      <LinearGradient colors={["#2282FF", "#326aee"]}>
        <Onboarding />
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

export default Index;
