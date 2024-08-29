import { View, Text, TextInput, Button } from "react-native";
import { router } from "expo-router";
import { useSession } from "@/contexts/ctx";
import { loginStyles } from "./auth.styles";

export default function Login() {
  const { signIn } = useSession();

  const handleNavigate = (route: "login" | "register" | "recover") => {
    const action: Record<typeof route, () => void> = {
      login: () => {
        signIn();
        router.replace("/(app)/home");
      },
      register: () => router.navigate("/register"),
      recover: () => router.navigate("/recover"),
    };

    action[route]();
  };

  return (
    <>
      <View style={loginStyles.container}>
        <View style={loginStyles.upperContent}>
          <Text style={loginStyles.upperContentTitle}>Welcome 🌈</Text>
        </View>
        <View style={loginStyles.middleContent}>
          <TextInput
            placeholder="Username (not required for now)"
            style={loginStyles.middleContentInput}
          />
          <TextInput
            placeholder="Password (not required for now)"
            style={loginStyles.middleContentInput}
          />
        </View>
        <View style={loginStyles.bottomContent}>
          <Button title="Login" onPress={() => handleNavigate("login")} />
          <Button title="Register" onPress={() => handleNavigate("register")} />
          <Button title="Recover" onPress={() => handleNavigate("recover")} />
        </View>
      </View>
    </>
  );
}
