import { StatusBar } from "expo-status-bar";
import Login from "./pages/Login/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "./pages/Cadastro/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha/RecuperarSenha"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />

        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{ title: "Recuperar Senha" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
