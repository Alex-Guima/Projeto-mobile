import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "5%",
  },

  inputContainer: {
    marginHorizontal: "10%",
  },

  label: {
    marginBottom: "3%", // Espaço entre o label e o campo de input
    fontSize: 20, // Tamanho da fonte do label
    fontWeight: "bold", // Negrito no label (opcional)
    color: "#000", // Cor do texto do label
  },

  infoExtra: {
    height: 100, // Aumenta a altura do campo para parecer um retângulo
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10, // Mantém bordas levemente arredondadas, ajuste para mais quadrado se preferir
    paddingLeft: 10, // Adiciona espaço para o texto dentro do campo
    width: "100%", // Ocupa 100% da largura disponível
    paddingTop: 15,
    textAlignVertical: "top",
    marginBottom: 10,
  },

  input: {
    paddingLeft: 10, // Adiciona espaço para o texto dentro do campo
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 3,
    marginBottom: 7,
  },

  buttonContainer: {
    marginTop: "3%",
    alignItems: "center",
  },

  pickerContainer: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 3,
  },

  picker: {
    height: 50,
    width: "100%",
  },

  button: {
    alignItems: "center", // Centraliza o texto no eixo horizontal
    justifyContent: "center", // Centraliza o texto no eixo vertical
    backgroundColor: "#7C7CF4",
    height: 50,
    width: 150,
    borderRadius: 40,
    alignSelf: "center",
    margin: 20,
  },

  buttonText: {
    color: "#fff",
  },
});

export const cleanCPF = (cpf: string) => {
  const onlyNumbers = cpf.replace(/\D/g, "");

  return onlyNumbers;
};

export const maskCPF = (cpf: string) => {
  if (cpf.length === 3) {
    return (cpf += ".");
  } else if (cpf.length === 7) {
    return (cpf += ".");
  } else if (cpf.length === 11) {
    return (cpf += "-");
  }

  return cpf;
};

export const maskTelefone = (telefone: string) => {
  const onlyNumbers = telefone.replace(/\D/g, ""); // remove caracteres não numéricos

  if (onlyNumbers.length <= 10) {
    return onlyNumbers
      .replace(/(\d{2})(\d)/, "($1) $2") // ddd parênteses e espaço
      .replace(/(\d{5})(\d)/, "$1-$2"); // ddd o hífen
  } else if (onlyNumbers.length <= 11) {
    return onlyNumbers
      .replace(/(\d{2})(\d)/, "($1) $2") // add parênteses e espaço
      .replace(/(\d{5})(\d{1,4})$/, "$1-$2"); // add o hífen para celular
  }

  return onlyNumbers;
};