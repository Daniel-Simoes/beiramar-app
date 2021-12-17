import React from 'react';
import { View, TouchableOpacity, Dimensions, Text } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme, Rating } from "components";

const Stars = ({goToRating, rating}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper} onPress={goToRating}>   
        <View style={styles.content}>
          <View style={styles.contentRightSide}>
            <View style={styles.ratingContainer}>
              <View style={styles.bigStarContainer}>
                <Icon name="star" size={60} color={theme.palette.icon.main} />
                <View style={styles.textRatingContainer}>
                  <Text style={styles.textRating}>{rating}</Text>
                </View>
              </View>
              <Rating rating={rating}/>
            </View>
          </View>
          <View style={styles.contentLeftSide}>
            <View style={styles.information}>
              <Text style={styles.title}>Voce nao tem novas avaliacoes.</Text>
              <Text style={styles.subtitle}>Voce tem 40% das avaliacoes com 4 estrelas.</Text>
            </View>
            <View style={styles.actionIcon}>
              <Icon name="arrow-right" size={20} color={theme.palette.icon.main} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
  },
  wrapper: { 
    width:Dimensions.get("window").width - 20, 
    borderRadius:8, 
  },
  content: {
    justifyContent:"space-between",
    flexDirection:"row",
    backgroundColor: theme.palette.primary.contrast,
    borderRadius:8,
    padding: 10,
  },
  contentRightSide: {
    flexDirection:"row", 
    alignItems:"center", 
    borderRightWidth:1,
    minWidth:85, 
    borderRightColor: theme.palette.border.main,
  },
  ratingContainer: {
    width: 70,
    height: 70,
    justifyContent:"center",
    alignItems:"center",
  },
  bigStarContainer: {
    justifyContent:"center",
    alignItems:"center",
  },
  textRatingContainer: {
    position:"absolute",
  },
  textRating: {
    fontSize:30,
  },
  contentLeftSide: {
    flex:1, 
    padding:10, 
    flexDirection:"row",
  },
  information: { 
    width:"90%",
  },
  title: {
    fontWeight:"600", 
    fontSize:16,
    color: theme.palette.typograph.main, 
  },
  subtitle: {
    fontWeight:"500", 
    color: theme.palette.typograph.main, 
    marginTop:5,
  },
  actionIcon: {
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"center", 
    margin:10,
  },
}));

export default Stars;