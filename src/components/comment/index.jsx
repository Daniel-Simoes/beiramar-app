import React from "react";
import { View, Text, Image } from "react-native";
import { makeStyles, useTheme, Rating } from "components";

const Comments = ({
  message,
  photo,
  rating,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: photo}}
      /> 
      <View style={styles.item}>
        <Text>{message}</Text>
        <View style={styles.message}>
          <Rating rating={rating}/>
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    flexDirection:"row",
  },
  item: {
    backgroundColor: theme.palette.primary.contrast,
    width:317,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius:25,
    top:5,
    left:5
  },
  message: {
    flexDirection:"row", 
    margin:3, 
    top:-3, 
    justifyContent:"flex-end", 
    top:10,
  },
}));

export default Comments;