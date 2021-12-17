import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { makeStyles, useTheme } from "components";
import {useNavigation} from "@react-navigation/native";

const ChatListEntry = ({
  image,
  name,
  date,
  lastMessage,
  unreaded,
}) => {
  const styles = useStyles();
  const theme = useTheme();


  const navigation = useNavigation();

  const goToChatDetail = () => {
    navigation.navigate("ChatDetail");
  };

  return (
    <TouchableOpacity style={styles.container}
    onPress={goToChatDetail}>
      <Image
        style={styles.image}
        source={{uri: image}}
      /> 
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.contentBottom}>
          <Text 
            numberOfLines={1} 
            style={styles.message}
          >
            {lastMessage}
          </Text>
          {
            unreaded && <View style={styles.badge}/>
          }
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
    borderBottomWidth:0.2,
    borderBottomColor: "#e1e1e1",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  contentTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontWeight:"700",
    color: theme.palette.typograph.main,
  },
  date: {
    paddingBottom: 7,
    fontSize: 12,
    color: theme.palette.typograph.secondary,
    fontStyle: "italic",

  },
  contentBottom: {
    flexDirection: "row",
  },
  message: {
    flex: 1,
    color: theme.palette.typograph.main,
  },
  badge:{
    borderRadius: 8,
    height: 16,
    width: 16,
    backgroundColor: theme.palette.badge.main,
  },
}));

export default ChatListEntry;