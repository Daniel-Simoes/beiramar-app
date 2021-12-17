import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const ServiceDetailsOptions = ({
  handleImagesOption,
  handleCommetsOption,
  handleProvidersOption,
  imagesOptionBackgroundColor,
  commetsOptionBackgroundColor,
  providersOptionBackgroundColor,
  imagesOptionIconColor,
  commetsOptionIconColor,
  providersOptionIconColor,
}) => {
  const styles = useStyles({
    imagesOptionBackgroundColor,
    commetsOptionBackgroundColor,
    providersOptionBackgroundColor,
  });
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagesOption} style={styles.content}>
        <Icon name="image" size={22} color={imagesOptionIconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCommetsOption} style={styles.comments}>
        <Icon name="comments" size={26} color={commetsOptionIconColor} />
      </TouchableOpacity>      
      <TouchableOpacity onPress={handleProvidersOption}style={styles.provider}>
        <Icon name="users" size={26} color={providersOptionIconColor} />
      </TouchableOpacity>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flexDirection:"row", 
    justifyContent:"space-between", 
    paddingHorizontal: 60, 
    marginTop:20,
    marginBottom:15
  },
  content: { 
    height:60, 
    width:60, 
    borderRadius:30, 
    backgroundColor: props.imagesOptionBackgroundColor, 
    alignItems:"center", 
    justifyContent:"center",
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
   },
  comments: {
    height:60, 
    width:60, 
    borderRadius:30, 
    backgroundColor: props.commetsOptionBackgroundColor, 
    alignItems:"center", 
    justifyContent:"center",
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },

  provider: {
    height:60, 
    width:60, 
    borderRadius:30, 
    backgroundColor: props.providersOptionBackgroundColor, 
    alignItems:"center", 
    justifyContent:"center",
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },
}));

export default ServiceDetailsOptions;