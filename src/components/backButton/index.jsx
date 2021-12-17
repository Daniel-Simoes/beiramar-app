import React from "react";
import { TouchableOpacity, SafeAreaView, View } from "react-native";
import { makeStyles, useTheme } from "components";
import Icon from "react-native-vector-icons/FontAwesome";

const BackButton = ({
  navigation,
  rightSide,
  iconName,
  iconColor,
  background,
  leftSide,
  styleContainer,
}) => {
  const styles = useStyles({background, rightSide, leftSide});
  const theme = useTheme();

  return (
    <SafeAreaView style={{zIndex:1000,maxHeight:10}}>
      { rightSide ?
        <View style={[styles.container, styleContainer]}>
          <TouchableOpacity 
            style={styles.content}
            onPress={() => navigation.goBack()} 
          >
            <Icon name={iconName} size={24} color={iconColor} />
          </TouchableOpacity>
        </View>
        :
        <View style={[styles.container, styleContainer]}>
          <TouchableOpacity 
            style={styles.content}
            onPress={() => navigation.goBack()} 
          >
            <Icon name={iconName} size={24} color={iconColor} />
          </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    alignItems: props.rightSide ? "flex-start" : "flex-end",
    marginHorizontal: 10,
    bottom:5,
  },
  content: { 
    height:40, 
    width:40, 
    alignItems:"center", 
    justifyContent:"center", 
    backgroundColor: props.background ? theme.palette.primary.contrast : null, 
    borderRadius:20,
  },
}));

export default BackButton;