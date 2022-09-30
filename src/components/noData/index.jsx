import React from "react";
import {View, Text, Image} from "react-native";
import { makeStyles, useTheme } from "components";
import Lottie from 'lottie-react-native';

const NoData = ({menssage, lottie}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      { lottie ? 
      <Lottie source={require('../../assets/lottie.json')} style={{top:-40}} autoPlay loop />
      :
      <Text style={styles.text}>{menssage}</Text>
    
    }
   
      
      

    </View>    
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  
    
  },
  text: {
    color: "#e68d8d",
    fontStyle: 'italic',
    textAlign: "center" 
    
  }
}));

export default NoData;
