import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { makeStyles, useTheme, Avatar } from "components";

import {useNavigation} from "@react-navigation/native";

const TripProvider = ({bio, picture, firstName, lastName, userId, providerServices}) => {
  
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();
  const goToProviderProfile = (userId) => {
    navigation.navigate("Provider", {
      userId: userId,
    });
  }
  

  return (
    <TouchableOpacity onPress={() => goToProviderProfile(userId)} style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar
          containerStyle={styles.image}
          picture={picture}
        /> 
      </View>
      <View style={styles.content}>
        <Text style={styles.provider}>{firstName} {lastName}</Text>
          <Text style={styles.bio}>{bio}</Text>
      </View>
    </TouchableOpacity>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 120,
    borderBottomWidth:0.5,
    borderBottomColor:"#d9d9d9"
  },
  avatarContainer: {
    marginRight: 15,
    marginTop:-25
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  content: {
    flex: 1,
  },
  provider: {      
    fontWeight:"700"
  },
  bio: {   
    color: "rgba(116,116,116,1.0)",
    top:5,
  },
}));

export default TripProvider;