import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const Button = ({
  label,
  onPress,
  containerStyles,
  labelStyles,
  buttonStyles,
  iconName,
  iconColor,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={[styles.container, containerStyles]}>
      <TouchableOpacity 
        style={[styles.button, buttonStyles]}
        onPress={onPress}  
      >
        <View style={styles.content}>
          {iconName && 
            <View style={styles.icon}>
              <Icon name={iconName} size={24} color={iconColor} />
            </View>
          }
          <Text style={[styles.label, labelStyles]}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex:1,
  },
  button:{
    padding:10, 
    backgroundColor: "#000",
    justifyContent:"center",
    alignItems:"center",
  },
  label: {
    fontSize:16,
    fontWeight:"700",
  },
  icon: {
    marginRight: 5,
  },
  content: {
    flexDirection:"row", 
    alignItems:"center",
  },
}));

export default Button;