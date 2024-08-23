//React and React Native imports
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { Link } from "expo-router";

//Third party Libraries
import { LinearGradient } from "expo-linear-gradient";

//Project Resources
import Onboarding from "./screens/Onboarding/Onboarding";

// export default function Index() {
//   return (
//     <GestureHandlerRootView>
//       <LinearGradient colors={["#2282FF", "#326aee"]}>
//         <Onboarding />
//       </LinearGradient>
//     </GestureHandlerRootView>
//   );
// }

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página HOME</Text>
      <Link
        href={{
          pathname: "/screens/register",
          params: { id: "testando" },
        }}
      >
        Ir para tela de registro
      </Link>
    </View>
  );
}
