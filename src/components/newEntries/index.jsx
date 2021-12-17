import React from "react";
import { 
  View, 
  Text, 
  Dimensions, 
  Image,
 } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const NewEntries = ({ 
  title, 
  subtitle, 
  amount, 
  photo,
  type,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.item}>
      <View>
        { type === "get" ?
        <View style={styles.badge}>
          <Icon name="arrow-down" size={14} color={theme.palette.icon.secondary} />
        </View>
        : type === "paid" ?
        <View style={styles.badge}>
          <Icon name="arrow-up" size={14} color={theme.palette.icon.secondary} />
        </View>
        :
        <View style={styles.BadBadge}>
          <Icon name="minus" size={14} color={theme.palette.icon.secondary} />
        </View>
        }
        
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: photo}}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.text}>{subtitle}</Text>
          <Text style={styles.text}>{amount}</Text>
        </View>
      </View> 
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
  },
  item: {
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    marginHorizontal: 12,
    marginVertical: 5,
    backgroundColor: theme.palette.primary.main,
    borderRadius:8,
    padding: 10,
  },
  content: {
    flex:1, 
    padding:10,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 70/2,
    overflow: "hidden",
  },
  image: {
    width: 70,
    height: 70,
  },
  badge: {
    height:20, 
    width:20, 
    borderRadius:10, 
    backgroundColor: theme.palette.badge.main,
    position:"absolute", 
    zIndex:1000, 
    right:0, 
    bottom:0, 
    alignItems:"center", 
    justifyContent:"center"
  },
  BadBadge: {
    height:20, 
    width:20, 
    borderRadius:10, 
    backgroundColor: "red",
    position:"absolute", 
    zIndex:1000, 
    right:0, 
    bottom:0, 
    alignItems:"center", 
    justifyContent:"center"
  },
  title: {
    margin:15, 
    color:"#333", 
    fontWeight:"600",
  },
  text: { 
    color: theme.palette.typograph.main,
  },
  name: {
    fontWeight:"600", 
    fontSize:16,
    color: theme.palette.typograph.main,
  },
  subtitleContainer: {
    flexDirection:"row", 
    justifyContent:"space-between", 
    top:5,
  },
  note: {
    paddingHorizontal:20,
  },
  noteText: {
    color:"grey",
  },
}));

export default NewEntries;