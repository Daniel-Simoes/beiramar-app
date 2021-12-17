import React from "react";
import { View, Image, Text } from "react-native";
import { makeStyles, useTheme, Rating } from "components";

const Feedback = () => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: "https://placeimg.com/640/480/nature"}}
      /> 
      <View style={styles.item}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>Carlos </Text>
          <Text>atribuiu 4 estrelas para voce.</Text>
        </View>
        <Text style={styles.trip}>Sao Jose do Gostoso</Text>
        <Text style={styles.date}>22/11/2020 - 08:00h</Text>
        <Text style={styles.subtitle}>Comentario:</Text>
        <Text style={styles.feedback}>“Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips...’’</Text>
        <View style={styles.rating}>
          <Rating rating={4} />
        </View>
        <Text style={styles.replayFeedbackTitle}>Adicione uma avaliacao para Carlos?</Text>
        <View style={styles.replayFeedbackContainer}>
          <Rating />
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flexDirection:"row",
    top:10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius:25,
    top:5,
    left:5,
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
  titleContainer: {
    flexDirection:"row",
  },
  name: {
    fontWeight:"700",
  },
  trip: {
    fontWeight:"600", 
    color:"grey", 
    marginTop:5,
  },
  date: {
    color:"grey",
  },
  subtitle: {
    fontWeight:"600", 
    marginTop:15,
  },
  feedback: {
    color:"grey", 
    fontStyle:"italic", 
    marginTop:5,
  },
  rating: {
    flexDirection:"row",
    justifyContent:"flex-end", 
    top:10,
  },
  replayFeedbackContainer: {
    flexDirection:"row", 
    justifyContent:"center", 
    top:10, 
    marginBottom:10,
  },
  replayFeedbackTitle: {
    fontWeight:"600", 
    marginTop:30,
  },
}));

export default Feedback;