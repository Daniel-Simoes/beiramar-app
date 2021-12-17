import React from "react";
import {SafeAreaView, Dimensions} from "react-native";
import {
  makeStyles, 
  useTheme, 
  Header,
  InputField,
  Button,
} from "components";
import {useNavigation} from "@react-navigation/native";

const Coupon = () => {
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        leftIcon={"arrow-left"}
        leftIconColor={theme.palette.icon.main}
        leftIconAction={goBack}
        label={"Ativaçāo do Cupom"}
      />
      <InputField 
        label={"Cupom"}
        firstInput={"Código"} 
        firstPlaceholder={"BEIRAMAR2021"} 
        // onChangeTextFirstInput={onChangeTextFirstInput} 
        // valueFirstInput={valueFirstInput} 
        icon={"pencil"}
        note={"Adcione seu email para poder alterar os detalhes do seu carro."}
        locked={false}
      />
      <Button 
        label={"Aplicar"}
        containerStyles={styles.containerStyles}
        buttonStyles={styles.buttonStyles}
        labelStyles={styles.labelStyles}
        onPress={() => alert("Salvar")}
      />
    </SafeAreaView>
  )
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    backgroundColor:theme.palette.primary.main,
  },
  containerStyles: {
    marginVertical: 20,
    justifyContent:"center",
    alignItems:"center",
  },
  labelStyles: {
    color:"#fff",
    fontSize:16,
    fontWeight:"700"
  },
  buttonStyles: {
    width:Dimensions.get("window").width - 20, 
    backgroundColor: "#2F80ED",
    borderRadius: 12,
    paddingVertical:15,
    position:"absolute",
    bottom:0

  },
}));

export default Coupon;