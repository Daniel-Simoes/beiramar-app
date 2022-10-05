import React from "react";
import { SafeAreaView,Dimensions } from "react-native";
import { makeStyles, useTheme, Button, Header } from "components";

const Coming = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        label={"Configuração"}
      />
      <Button
        label={"Fechar"}
        containerStyles={styles.containerStyles}
        buttonStyles={styles.buttonStyles}
        labelStyles={styles.labelStyles}
        onPress={goBack}
      />
    </SafeAreaView>    
  );
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
    fontWeight:"800"
  },
  buttonStyles: {
    width:Dimensions.get("window").width - 100, 
    backgroundColor: "#2F80ED",
    borderRadius: 8,
    paddingVertical:15,
    position:"absolute",
    bottom:0

  },
}));

export default Coming;
