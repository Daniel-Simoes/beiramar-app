import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { makeStyles, useTheme } from "components";
 import Icon from "react-native-vector-icons/FontAwesome";

const MenuTripDetails = ({
  goToImages,
  goToComments,
  goToTripProviders,
}) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <>
      <View style={styles.container}>
      <TouchableOpacity  style={styles.content} onPress={goToImages}>
        <View>
          <Icon name="photo" size={30} color={"#333"} />
          <View style={{position:"absolute", right:-15, top:-10, height:20, width:20, borderRadius:10, alignItems:"center", justifyContent:"center", backgroundColor:"#2F80ED"}}>
             <Text style={{color:"#fff", fontWeight:"600"}}>12</Text>
          </View>
        </View>
        <Text>Imagens</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.content} onPress={goToComments}>
        <View>
          <Icon name="comments" size={30} color={"#333"} />
          <View style={{position:"absolute", right:-15, top:-10, height:20, width:20, borderRadius:10, alignItems:"center", justifyContent:"center", backgroundColor:"#2F80ED"}}>
             <Text style={{color:"#fff", fontWeight:"600"}}>5</Text>
          </View>
        </View>
        <Text>Comentários</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.content} onPress={goToTripProviders}>
        <View>
          <Icon name="users" size={30} color={"#333"} />
          <View style={{position:"absolute", right:-15, top:-10, height:20, width:20, borderRadius:10, alignItems:"center", justifyContent:"center", backgroundColor:"#2F80ED"}}>
            <Text style={{color:"#fff", fontWeight:"600"}}>9</Text>
          </View>
        </View>
        <Text>Guias</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};
const useStyles = makeStyles((theme, props) => ({

  container: {
    flexDirection:"row", 
    justifyContent:"space-between", 
    paddingHorizontal: 20, 
    marginTop:20,
  },
  content: { 
    height:100, 
    width:100, 
    borderRadius:30, 
    backgroundColor: "#fff", 
    alignItems:"center", 
    justifyContent:"center",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
   },
}));

export default MenuTripDetails;