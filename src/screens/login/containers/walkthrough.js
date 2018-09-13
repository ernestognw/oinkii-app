import React from "react";
import { StyleSheet, Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Icon } from "native-base";

class Walkthrough extends React.Component {
  _onDone = () => {
    this.props.navigation.navigate("App")
    this.props.navigation.navigate("IncomeModal")
  }

  render() {
    return (
      <AppIntroSlider
        buttonTextStyle={styles.button}
        slides={slides}
        onDone={this._onDone}
        nextLabel={<Icon style={styles.icon} type="MaterialIcons" name="navigate-next"/>}
        doneLabel="Listo"
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300
  },
  textWhite: {
    color: "white",
    marginBottom: "10%"
  },
  titleWhite: {
    fontWeight: "600",
    fontSize: 24,
    color: "white",
    marginTop: "10%"
  },
  button: {
    padding: 6,
  },
  icon: {
    color: "#f7f9fa",
    fontSize: 40,
  }
});

const slides = [
  {
    key: "1",
    title: " ¡Bienvenido a Oinkii!",
    text: "Tu primera app para \n manejar tu dinero.",
    image: require("../../../../assets/walkthrough-1.png"),
    imageStyle: styles.image,
    textStyle: styles.textWhite,
    titleStyle: styles.titleWhite,
    backgroundColor: "#6E4F94"
  },
  {
    key: "2",
    title: "¡Regístralo todo!",
    text: "Lleva un historial de tus gastos \n e ingresos, con datos como fechas, \n cantidades y descripciones.",
    image: require("../../../../assets/walkthrough-2.png"),
    imageStyle: styles.image,
    textStyle: styles.textWhite,
    titleStyle: styles.titleWhite,
    backgroundColor: "#6E4F94"
  },
  {
    key: "3",
    title: "¡Plantéate metas!",
    text: " Además podrás establecer objetivos de ahorro, y convertir esas metas en gastos una vez que las completes.",
    image: require("../../../../assets/walkthrough-3.png"),
    imageStyle: styles.image,
    textStyle: styles.textWhite,
    titleStyle: styles.titleWhite,
    backgroundColor: "#6E4F94"
  },
  {
    key: "4",
    title: "¡Cambia tu información!",
    text: "Puedes editar tus registros, tanto de gastos como de ingresos, para que tengas el mejor control.",
    image: require("../../../../assets/walkthrough-4.png"),
    imageStyle: styles.image,
    textStyle: styles.textWhite,
    titleStyle: styles.titleWhite,
    backgroundColor: "#6E4F94"
  },
  {
    key: "5",
    title: "¡Aprende sencillo!",
    text: "Además, viene con un libro integrado de finanzas para niños, donde te mostramos conceptos básicos del dinero.",
    image: require("../../../../assets/walkthrough-5.png"),
    imageStyle: styles.image,
    textStyle: styles.textWhite,
    titleStyle: styles.titleWhite,
    backgroundColor: "#6E4F94"
  },
  {
    key: "6",
    title: "¡Empieza ahora!",
    text: "Para empezar a ahorrar, agrega tu primer ingreso.",
    image: require("../../../../assets/walkthrough-6.png"),
    imageStyle: styles.image,
    textStyle: styles.textWhite,
    titleStyle: styles.titleWhite,
    backgroundColor: "#6E4F94"
  }
];

export default Walkthrough;
