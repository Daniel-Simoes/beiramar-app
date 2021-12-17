import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Rating, useTheme, makeStyles} from "components";

const Info = ({
  title,
  price,
  rating,
  duration,
  distance,
  coverPhoto,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentLeftSide}>
          <Image
            style={styles.image}
            source={{uri: coverPhoto}}
          />
          <View style={styles.price}>
            <Text style={styles.textPrice}>R${price}</Text>
          </View>
        </View> 
        <View style={styles.contentRightSide}>
          <View style={styles.topInfo}>
            <Text  numberOfLines={1} style={{ fontWeight:"700", width:"80%"}}>{title}</Text>
            <Rating  rating={rating}/>
          </View>
          <View style={styles.bottomInfo}>
            <View style={styles.distance}>
              <Icon name={"car"} size={18} color={"rgba(0, 0, 0, 0.3)"} />
              <Text style={styles.text}>{distance}km</Text>
            </View>
            <View style={styles.time}>
              <Icon name={"clock-o"} size={18} color={"rgba(0, 0, 0, 0.3)"} />
              <Text style={styles.text}>{duration}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
container : {
  position:"absolute", 
  bottom:30, 
  zIndex:1000, 
  backgroundColor:"rgba(250, 250, 250, 0.5)", 
  width:"65%", 
  borderRadius:8, 
  marginLeft:20,
  paddingVertical:15,
},
content: { 
  flexDirection:"row",
},
image: {
  height:"100%", 
  width: "100%", 
  borderRadius:8,
},
price: {
  position:"absolute",
  bottom: 5,
},
contentLeftSide: { 
  width:"30%",  
  alignItems:"center", 
  marginHorizontal:10,
},
contentRightSide: {},
topInfo: {
  paddingVertical:5, 
},
bottomInfo: {
  flexDirection:"row",
},
distance: {
  flexDirection:"row", 
  marginRight:10,
},
time: {
  flexDirection:"row",
},
text: { 
  marginLeft:5,
},
textPrice: {
  color:"#fff", 
  fontWeight:"700",
},
}));

export default Info;