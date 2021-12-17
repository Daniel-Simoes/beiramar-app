import React from "react";
import { View, Image } from "react-native";
import { makeStyles, useTheme } from "components";

const Avatar = ({containerStyle, picture, border}) => {
  const styles = useStyles({border});
  const theme = useTheme();

  return (
    <View style={[styles.imageContainer, containerStyle]}>
        <Image 
          style={styles.image}
          source={{ uri: picture}}
        /> 
      </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  imageContainer: {
    overflow: "hidden",
    borderWidth: props.border && 1,
    borderColor: "#fff",
  },
  image: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
}));

export default Avatar;