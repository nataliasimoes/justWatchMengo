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
        <Text style={styles.mensagem}>Redefinição de Senha</Text>
        <Text style={styles.mensagemDescription}>Informe seu email e iremos te enviar uma nova senha</Text>
      </View>

      <View style={styles.alinhamentoCentro}>
        <TextInput
          style={styles.textField}
          keyboardType="email-address"
          placeholder="E-mail"
          placeholderTextColor="gray"
        />


        <TouchableOpacity style={styles.botaoAcessar}>
          <Text style={styles.textoBotaoAcessar}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botoesNovaContaEEsqueceuSenha}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.botaoLink}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
