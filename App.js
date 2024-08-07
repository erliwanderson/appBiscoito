import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const [img, setImg] = useState(require("./src/assets/biscoito.png"));
  const [frase, setFrase] = useState("");

  let frases = [
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Grandes conquistas começam com um único passo.",
    "A persistência é o caminho do êxito.",
    "Você é mais forte do que imagina e capaz de mais do que pensa.",
    "Não espere por oportunidades, crie-as.",
    "Cada desafio é uma oportunidade disfarçada.",
    "O fracasso é apenas a oportunidade para começar de novo com mais inteligência.",
    "A jornada de mil milhas começa com o primeiro passo.",
    "Seja a mudança que você deseja ver no mundo.",
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setFrase(frases[numeroAleatorio]);
    setImg(require("./src/assets/biscoitoAberto.png"));

    setTimeout(() => {
      setImg(require("./src/assets/biscoito.png"));
    }, 300);
  }

  function reiniciarBiscoito() {
    setImg(require("./src/assets/biscoito.png"));
    setFrase("");
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{frase}</Text>

      <TouchableOpacity style={styles.botton} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botton, { marginTop: 25, borderColor: "#121212" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: "#121212" }]}>
            Reiniciar biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botton: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
