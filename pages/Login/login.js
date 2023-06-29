import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import { styles } from "../../css/css";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
          
      <View style={styles.boasVindas}>
        <Image
          style={styles.image}
          source={require("../../assets/remo.png")}
          resizeMode="contain"
        />
        <Text style={styles.mensagem}>Acessar conta</Text>
      </View>
      <View style={styles.alinhamentoCentro}>
        <TextInput
          style={styles.textField}
          keyboardType="email-address"
          placeholder="E-mail"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.textField}
          type="password"
          placeholder="senha"
          placeholderTextColor="gray"
          secureTextEntry={true}
        />

        <Switch></Switch>
        <TouchableOpacity style={styles.botaoAcessar}>
          <Text style={styles.textoBotaoAcessar}>Acessar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botoesNovaContaEEsqueceuSenha}>
        <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
          <Text style={styles.botaoLink}>Esqueci a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.botaoLink}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
