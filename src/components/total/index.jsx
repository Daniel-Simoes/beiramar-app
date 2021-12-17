import React from "react";
import {View, Text} from "react-native";
import { makeStyles, useTheme } from "components";

const Total = ({
  price,
  descont = "100,00",
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container} >
      <View  style={styles.content}>
        <Text style={styles.title}>Preço do Passeio</Text>
        <Text style={styles.text}>R$ {price}</Text>
      </View> 
      <View  style={styles.content}>
        <Text style={styles.title}>Cupom de Desconto</Text>
        <Text style={styles.text}>R$ {descont}</Text>
      </View>
      <View  style={styles.hr} />
      <View  style={styles.content}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>R$ {Number(price) - Number(descont)}</Text>
      </View>
    </View>    
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    paddingVertical:10
  },
  content: {
    flexDirection:"row", 
    justifyContent:"space-between", 
    marginHorizontal:15, 
    marginTop:10,
  },
  text: {
    fontWeight:"700",
    color:"#333"
  },
  hr: {
    height:0.5, 
    backgroundColor:"#c5c5c5", 
    marginHorizontal:15, 
    marginTop:10,
  },
  title: {
    color:"#333"
  }
}));

export default Total;