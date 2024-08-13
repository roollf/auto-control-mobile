import { Text, View, StyleSheet, Pressable } from "react-native";
import OrganizeImage from "../../assets/images/organize.svg";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import LottieView from "lottie-react-native";

export default function OnboardingTwo() {
  return (
    <LinearGradient colors={["#2282FF", "#0f3970"]} style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          width: "100%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          source={require("../../assets/images/search-animation.json")}
          style={{ width: "100%", height: "80%" }}
          autoPlay
          loop
        />

        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 32,
          }}
        >
          Facilidade
        </Text>
        <Text
          style={{
            color: "white",
            marginTop: 10,
            textAlign: "center",
            width: "80%",
          }}
        >
          Tenha acesso à todos os documentos do seu veículo em um só lugar
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginTop: 40,
          }}
        >
          <View style={styles.reference}></View>
          <View style={styles.referenceFilled}></View>
          <View style={styles.reference}></View>
        </View>
      </View>
      <Link href="/screens/OnboardingThree" asChild>
        <Pressable
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
            paddingHorizontal: 40,
            borderRadius: 25,
            marginTop: 60,
          }}
        >
          <Text>Próximo</Text>
        </Pressable>
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  reference: {
    backgroundColor: "gray",
    borderRadius: 10,
    height: 6,
    width: "10%",
  },
  referenceFilled: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 6,
    width: "10%",
  },
});
