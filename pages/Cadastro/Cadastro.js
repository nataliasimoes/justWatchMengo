import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../../css/css";

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.boasVindas}>
        <Image
          style={styles.image}
          source={require("../../assets/remo.png")}
          resizeMode="contain"
        />

        <Text style={styles.mensagem}>Cadastrar Conta</Text>
      </View>
      <View style={styles.alinhamentoCentro}>
        <TextInput
          style={styles.textField}
          placeholder="Nome"
          placeholderTextColor="gray"
        />
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

        <TextInput
          style={styles.textField}
          type="ConfirmedPass"
          placeholder="Confirme a senha"
          placeholderTextColor="gray"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.botaoAcessar}>
          <Text style={styles.textoBotaoAcessar}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.botaoLink}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
