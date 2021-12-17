import React from "react";
import {View, Image, Dimensions } from "react-native";
import { makeStyles, useTheme } from "components";

const Map = () => {
  const styles = useStyles({Dimensions});
  const theme = useTheme();
  
  return (
    <View style={{
      width:Dimensions.get("window").width, 
      alignItems:"center",
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
      }}>
      <Image
        style={styles.image}
        source={require('../../assets/map.png')} 
      />
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  image: {
    height:Dimensions.get("window").width*1.2,  
    width:"95%",
    borderRadius: 20,
    
  },
}));

export default Map;