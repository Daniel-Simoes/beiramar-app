import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {makeStyles, useTheme} from "components";

const TripDetail = ({
  title,
  description,
  city,
  state,
  distance,
  stops,
  duration,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{city}, {state}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View style={styles.additionalsInfor}>
      <View style={styles.additionalInfoContent}>
        <Text style={styles.text}>{stops} Paradas</Text>
      </View>
      <View style={styles.additionalInfoContent}>
        <Text style={styles.text}>{duration}</Text>
      </View>
    </View>
    <View style={styles.distance}>
      <Icon name="map" size={24} color="#333" />
      <Text style={styles.distanceText}>Percurso de {distance} Km</Text>
    </View>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex:1,
  },
  header: {
    padding:20,
  },
  title: {
    fontSize:20, 
    fontWeight:"700",
  },
  subtitle: {},
  description: {
    top:15,
  },
  additionalsInfor: {
    flexDirection:"row",
    marginLeft:5,
    marginTop: 20,
  },
  additionalInfoContent: {
    marginHorizontal: 10, 
    padding:15,  
    backgroundColor:theme.palette.primary.contrast,
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1, 
    borderRadius:12, 
    alignItems:"center", 
    justifyContent:"center",
  },
  text: { 
    fontWeight:"700",
  },
  distance: {
    margin:20, 
    flexDirection:"row", 
    alignItems:"center",
  },
  distanceText:{
    marginLeft: 10,
    fontWeight:"700",
    color:"#333"
  }
}));

export default TripDetail;