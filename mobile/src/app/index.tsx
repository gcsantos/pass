import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Image, StatusBar } from "react-native";
export default function Home() {
  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />

      <Image
        source={require("@/assets/logo.png")}
        className="h-16 "
        resizeMode="contain"
      />
      <View className="w-full mt-12 gap-4">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Código do ingresso" />
        </Input>

        <Button title="Acessar ingresso" />

        <Link
          href="/register"
          className="text-green-100 text-base font-bold text-center mt-8">
          Ainda não possuis um ingresso?
        </Link>
      </View>
    </View>
  );
}
