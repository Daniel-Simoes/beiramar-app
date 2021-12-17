import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const ProviderCard = ( {checkBox, setCheckBox, onPress, providers}) => {
  console.log("PROVIDER", providers);
  const styles = useStyles();
  const theme = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: providers[0].picture}}
      /> 
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.info}>
          <Text style={styles.provider}>{providers[0].firstName + " " +providers[0].lastName}</Text>
          <Text style={styles.providerRegister}>{providers[0].email}</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>4.9</Text>
              <Icon name={"star"} size={16} color={"orange"} />
            </View>
          </View>
          <CheckBox
            disabled={true}
            value={checkBox}
            tintColor={"#e5e5e5"}
            onCheckColor={"#FFF"}
            onFillColor={"#2F80ED"}
            onTintColor={"#2F80ED"}
            style={{marginTop:10}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 80,
    backgroundColor:"#fff",
    marginHorizontal:10,
    borderRadius:8,
    marginTop:20
  },
  image: {
    height: 60,
    width: 60,
    overflow: "hidden",
    marginRight: 15,
    borderRadius:30
  },
  wrapper: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flex:1,
  },
  provider: {
    fontWeight:"700",
  },
  providerRegister: {},
  rating: {
    flexDirection:"row",
  },
  ratingText: {
    fontWeight:"700", 
    marginRight:5,
  },
}));

export default ProviderCard;