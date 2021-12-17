import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme, useDialog } from "components";

const Notification = ({item}) => {
 
  const styles = useStyles();
  const theme = useTheme();

  const [openContextMenu] = useDialog(
    {
      type: "list",
      title: "Title",
      description: "Description",
      submitLabel: "Ok",
      cancelLabel: "Cancel",
    },
    
    () => {alert("done!")}
  );

  const handleContextMenu = () => {
    openContextMenu();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.notificationType}>
          { item.type === "weather" ?
            <View>
              <View style={styles.badge}/>
              <Icon name="sun-o" size={18} color={"#FBE310"} />
            </View>  
          : item.type === "message" ?
            <View>
              <View style={styles.badge}/>
              <Icon name="comment" size={18} color={"#25C827"} />
            </View> 
          : item.type === "statistic" ?
            <Icon name="bar-chart" size={18} color={"#E54B4B"} />
          : item.type === "discount" ?
            <Icon name="gift" size={18} color={"#E600B3"} />
          : item.type === "alert" ?
            <View>
              <View style={styles.badge}/>
              <Icon name="bell" size={18} color={"#E8A643"} />
            </View>
          : item.type === "payment" ?
            <Icon name="credit-card" size={18} color={"#c5c5c5"} />
          : <Icon name="star" size={18} color={"#c5c5c5"} />
          }
          <Text style={styles.title}>{item.title[0].toUpperCase() + item.title.substr(1)}</Text>
        </View>
      <TouchableOpacity onPress={handleContextMenu} style={styles.contextMenu}>
        <Icon name="ellipsis-v" size={18} color={theme.palette.icon.main} />
      </TouchableOpacity>
      </View>
      <Text style={styles.notificationText}>{item.description}</Text>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    backgroundColor: theme.palette.primary.contrast, 
    borderRadius:12, 
    margin:5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,
    elevation: 1,
  },
  header: {
    flexDirection:"row", 
    backgroundColor: theme.palette.secondary.test, 
    borderTopLeftRadius:12, 
    borderTopRightRadius:12,
    justifyContent:"space-between",
    alignItems:"center",
  },
  notificationType: {
    flexDirection:"row",
    margin:8, 
    justifyContent:"center",
  },
  title: {
    color: theme.palette.typograph.contrast, 
    marginLeft:5,
    fontWeight:"700", 
  },
  contextMenu:{
    right:15,
  },
  notificationText: {
    margin:8,
    color: theme.palette.typograph.main,
  },
  badge: {
    height:10, 
    width:10, 
    backgroundColor: "#2F80ED", 
    position:"absolute", 
    right:-3, 
    zIndex:1000,
    borderRadius:5,
  },
}));

export default Notification;

