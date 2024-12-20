import { useState, useEffect }  from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity, Alert } from "react-native";
import { styles } from "../cadastrarTutor/cadastroStyle";
import axios from "axios";

export default function CadastroCachorro({ route, navigation }: any) {
  const [ownerId, setOwnerId] = useState(route.params);
  const [nomeCachorro, setNomeCachorro] = useState("");
  const [raca, setRaca] = useState("");
  const [idadeCachorro, setIdade] = useState("");
  const [info, setInfo] = useState("");

  // Função para enviar dados para o backend
  const handleCadastroCachorro = async () => {
    try {
      await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/owners/` +
          ownerId +
          "/dogs/new",
        {
          name: nomeCachorro,
          breed: raca,
          age: parseInt(idadeCachorro),
          extraInfo: info,
          ownerId: ownerId,
        },
      );
      Alert.alert(
        "Cadastro realizado!",
        "As informações foram armazenadas. \n\nClique fora para sair",
        [

        ],
        {
          cancelable: true,
        }
      )
    } catch (error) {
      console.error("Erro ao cadastrar o cachorro:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Nome do cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do cachorro</Text>
        <TextInput
          placeholder="Digite o nome do cachorro"
          style={styles.input}
          value={nomeCachorro}
          onChangeText={setNomeCachorro}
        />
      </View>

      {/* raça do cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Raça</Text>
        <TextInput
          placeholder="Digite a raça do cachorro"
          style={styles.input}
          value={raca}
          onChangeText={setRaca}
        />
      </View>

      {/* Idade do cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Idade do cachorro</Text>
        <TextInput
          placeholder="Digite a idade do cachorro"
          style={styles.input}
          value={idadeCachorro}
          keyboardType="numeric"
          onChangeText={setIdade}
        />
      </View>

      {/* Tabela com informações sobre o cachorro */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tabela de Informações</Text>
        <TextInput
          placeholder={`Digite Informações a mais sobre o Pet\nEx:\n- Remédios que pode tomar.\n- Hábitos que ele pode ter.`}
          style={styles.infoExtra}
          multiline={true} // Permite múltiplas linhas
          textAlignVertical="top" // Alinha o texto no topo do campo
          value={info}
          onChangeText={setInfo}
        />
      </View>

      {/* Botão para salvar as informações */}
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={handleCadastroCachorro}>
            <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
