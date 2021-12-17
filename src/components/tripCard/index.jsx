import React from "react";
import { 
  View, 
  Image, 
  Text,
} from "react-native";
import { makeStyles, useTheme } from "components";
import CheckBox from "@react-native-community/checkbox";

const TripCard = ({
  title, 
  trip, 
  subtitle, 
  amount, 
  photo, 
  checkBox, 
  setCheckBox, 
  distance,
  appointment,
  backgroundColor,
}) => {
  const styles = useStyles({backgroundColor});
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: photo}}
      /> 
      <View style={styles.info}>
        <Text style={styles.trip}>{trip}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.contentBottom}>
          { appointment  ?
            <Text style={styles.subtitle}>R$:{subtitle}</Text>
          :
            <Text style={styles.subtitle}>{subtitle}</Text>
          }
          
          
          { checkBox ?
            <View>
              <Text style={styles.text}></Text>
            </View>
          :
            <View /> 
          }
        </View>
      </View>
      
        <View style={styles.checkBoxContainer}>
          <View style={{alignItems:"flex-end", flex:1, justifyContent:"space-between", paddingVertical:5}}>
            <Text style={styles.text}>{distance}Km</Text>
            <Text style={styles.text}>{amount}</Text>
          </View>

          {checkBox && 
            <CheckBox
              disabled={true}
              value={true}
              tintColor={"#e5e5e5"}
              onCheckColor={"#FFF"}
              onFillColor={"#2F80ED"}
              onTintColor={"#2F80ED"}
              style={styles.checkBox}
            />
          }
        </View>
    </View>        
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: props.backgroundColor ? props.backgroundColor : theme.palette.primary.main,
    borderRadius:8,
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 16,
  },
  info: {
    flex:1, 
    padding:10,
},
trip: {
  fontWeight:"600",
  color:"#333",
},
title: {
  fontWeight:"500", 
  color:"#333",
},
subtitle: {
  color:"#333",
},
contentBottom: {
  flexDirection:"row", 
  justifyContent:"space-between", 
  top:5,
},
text: { 
  color:"#333",
},
checkBoxContainer: { 
  height:"100%", 
  alignItems:"center",
},
checkBox: {
  marginTop:10,
},
}));

export default TripCard;