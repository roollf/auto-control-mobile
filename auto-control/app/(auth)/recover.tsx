import { Text, View } from "react-native";
import { recoverStyles } from "./auth.styles";
import AppInput from "@/components/AppInput/AppInput";
import AppButton from "@/components/appButton/appButton";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function Recover() {
  return (
    <View style={recoverStyles.container}>
      <View style={recoverStyles.upperContent}>
        <View style={recoverStyles.headerContainer}>
          <Text style={recoverStyles.headerTitle}>Autocontrol</Text>
          <Text style={recoverStyles.headerSubTitle}>
            Prontuário automobilístico
          </Text>
        </View>
      </View>
      <View style={recoverStyles.middleContent}>
        <View style={recoverStyles.inputContainer}>
          <Text style={recoverStyles.inputTitle}>
            Recupere a sua senha Autocontrol
          </Text>
          <AppInput
            placeholder="E-mail"
            icon={
              <Entypo name="email" size={28} color="rgba(34, 130, 255, 0.7)" />
            }
          />
        </View>
      </View>
      <View style={recoverStyles.bottomContent}>
        <View style={recoverStyles.buttonContainer}>
          <AppButton label="Enviar" destination={() => {}} />
          <AppButton
            label="Voltar"
            isPrimary={false}
            backgroundColor="transparent"
            destination={() => {
              router.back();
            }}
          />
        </View>
      </View>
    </View>
  );
}
