import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { router, Link } from "expo-router";

export default function Login() {
  const handleGoBack = () => {
    return router.replace("/screens/OnboardingOne");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "50%",
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingHorizontal: 60,
            height: "50%",
          }}
        >
          <View
            style={{
              marginBottom: 20,
              alignSelf: "center",
              backgroundColor: "#2282FF",
              borderRadius: 100,
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 2,
              borderColor: "white",
              borderWidth: 2,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.15,
              shadowRadius: 3.84,
            }}
          >
            <Image
              source={require("../../assets/images/user.svg")}
              style={{
                resizeMode: "contain",
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              fontWeight: "semibold",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            Faça seu Login ou Registre-se
          </Text>
          <Text
            style={{
              opacity: 0.4,
              textAlign: "center",
              color: "#000000",
              marginTop: 20,
            }}
          >
            Controle as despesas de seus veículos com AutoControl
          </Text>
        </View>
        <TextInput
          style={{
            backgroundColor: "#f1f1f1",
            borderRadius: 5,
            width: "100%",
            height: 40,
            paddingLeft: 10,
          }}
          placeholder="Usuário"
        />
        <TextInput
          style={{
            backgroundColor: "#f1f1f1",
            borderRadius: 5,
            width: "100%",
            height: 40,
            marginTop: 10,
            paddingLeft: 10,
          }}
          placeholder="Senha"
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
            opacity: 0.5,
          }}
        >
          <Text>[] Salvar login</Text>
          <Text>Esqueceu sua senha?</Text>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.separator}></View>
          <Text style={{ paddingTop: 34, opacity: 0.4 }}>ou</Text>
          <View style={styles.separator}></View>
        </View>
        <View
          style={{
            width: "100%",
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 40,
            marginTop: 40,
          }}
        >
          <View
            style={{
              alignSelf: "center",
              backgroundColor: "white",
              borderRadius: 100,
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 2,
              borderColor: "#f1f1f1",
              borderWidth: 2,
            }}
          >
            <Image
              source={require("../../assets/images/google.png")}
              style={{
                resizeMode: "contain",
                width: 30,
                height: 30,
              }}
            />
          </View>

          <View
            style={{
              alignSelf: "center",
              backgroundColor: "white",
              borderRadius: 100,
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 2,
              borderColor: "#f1f1f1",
              borderWidth: 2,
            }}
          >
            <Image
              source={require("../../assets/images/facebook.png")}
              style={{
                resizeMode: "contain",
                width: 30,
                height: 30,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "40%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Pressable
            style={{
              width: "100%",
              backgroundColor: "#2282FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 15,
              borderRadius: 20,
              alignSelf: "flex-end",
            }}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  separator: {
    width: "40%",
    backgroundColor: "black",
    opacity: 0.4,
    height: 1,
    marginTop: 40,
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
