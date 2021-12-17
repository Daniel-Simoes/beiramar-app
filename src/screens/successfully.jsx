import React from "react";
import {View, Text, SafeAreaView, Dimensions} from "react-native";
import { makeStyles, useTheme, Button } from "components";
import Icon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";

const Successfully = () => {
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContent}>
        <Icon name="check" size={100} color="#fff" />
      </View>
      <Text style={styles.title}>Finalizado com Sucesso!</Text>
      <Text style={styles.subtitle}>Obrigado por ter finalizado o Passeio. Enviaremos uma notificacao para te avisar todos os detalhes</Text>
      <View style={styles.buttomContainer}>
        <Button 
          label={"Fechar"}
          containerStyles={styles.containerStyles}
          buttonStyles={styles.buttonStyles}
          labelStyles={styles.labelStyles}
          onPress={goToHome}
        />
      </View>
    </SafeAreaView>    
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    backgroundColor:theme.palette.primary.main,
    alignItems:"center", 
    justifyContent:"center",
  },
  containerStyles: {
    marginVertical: 20,
    justifyContent:"center",
    alignItems: "center",
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
    justifyContent:"center",
    alignItems:"center",
    bottom:20
  },
  iconContent: {
    backgroundColor:"#2F80ED", 
    height:200, 
    width:200, 
    borderRadius:100, 
    alignItems:"center",
    justifyContent:"center",
    marginVertical:15,
  },
  title: {
    fontWeight:"700", 
    fontSize:16,
  },
  subtitle: {
    color:"grey", 
    textAlign:"center",
    marginHorizontal:40, 
    marginTop:5,
  },
  buttomContainer: {
    position:"absolute", 
    bottom:0,
  }
}));

export default Successfully;