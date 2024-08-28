//React and React Native imports
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text, TextInput, Button } from "react-native";
import { router, Link } from "expo-router";
import { useSession } from "../contexts/ctx";
import styles from "./lading.styles";

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

export default function SignIn() {
  const { signIn } = useSession();

  const handleLogin = () => {
    console.log("Cliquei.");
    signIn();
    router.replace("/");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome! 🌈 </Text>
        <Text style={styles.paragraph}>
          This is a simple repo that emulates a login authentication workflow
          using Expo Router, focused on the navigation aspect.
        </Text>
        <View style={styles.separator} />
        <TextInput placeholder="Username(not required)" style={styles.input} />
        <TextInput
          placeholder="Password(not required)"
          secureTextEntry
          style={styles.input}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button
          title="Register"
          onPress={() => {
            router.push("/screens/register");
          }}
        />
      </View>
    </>
  );
}
