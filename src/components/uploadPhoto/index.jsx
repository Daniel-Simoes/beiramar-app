import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const uploadPhoto = () => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Adicionar Foto</Text>
        <View style={styles.uploadPhotoContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="image" size={40} color="#c5c5c5" />
          </TouchableOpacity>
          <Text style={styles.title}>Adicione sua nova foto de Perfil</Text>
          <Text style={styles.note}>Formatos recomendados: JPG, PNG, GIF (1500x1500, Maximo 10Mb)</Text>
        </View>
      </View> 
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
  },
  wrapper: { 
    width:Dimensions.get("window").width - 20, 
    backgroundColor: theme.palette.primary.contrast,
    borderRadius:8, 
    paddingBottom:15,
  },
  label: {
    margin:15, 
    color: theme.palette.typograph.main, 
    fontWeight:"600",
  },
uploadPhotoContainer: {
  alignItems:"center", 
  paddingVertical:15,
},
button: {
  height:100, 
  width:100, 
  backgroundColor: theme.palette.primary.main, 
  borderWidth:1, 
  borderColor: theme.palette.border.main, 
  borderStyle:"dashed", 
  borderRadius:8, 
  alignItems:"center", 
  justifyContent:"center",
},
title: {
  margin:15, 
  color: theme.palette.typograph.main,  
  fontWeight:"600",
},
note: { 
  color: theme.palette.typograph.secondary, 
  maxWidth:300, 
  textAlign:"center",
},
}));

export default uploadPhoto;