import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { makeStyles, useTheme } from "components";
import Icon from "react-native-vector-icons/FontAwesome";

const ActionsButtons = ({
  numberOfSaves,
  numberOfLikes,
  numberOfComments,
}) => {
  const styles = useStyles();
  const theme = useTheme();



  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => alert("Likes avaliable soon")} >
          <View style={styles.button}>
            <Icon 
              name="heart" 
              size={20} 
              color={theme.palette.icon.like} 
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.ammount}>{numberOfLikes}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={() => alert("Comments avaliable soon")}>
          <View style={styles.button}>
            <Icon 
              name="comment" 
              size={20} 
              color={theme.palette.icon.comment} 
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.ammount}>{numberOfComments}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Icon 
              name="bookmark" 
              size={20} 
              color={theme.palette.icon.save} 
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.ammount}>{numberOfSaves}</Text>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    position:"absolute", 
    zIndex:1000, 
    right:5,
    top:10,
  },
  button: {
    height:40, 
    width:40, 
    borderRadius:25, 
    backgroundColor:theme.palette.primary.main, 
    alignItems:"center", 
    justifyContent:"center",
  },
  ammount: {
    color: "#fff", 
    margin:10
  },
  buttonContainer: {
    alignItems:"center"
  },
}));

export default ActionsButtons;