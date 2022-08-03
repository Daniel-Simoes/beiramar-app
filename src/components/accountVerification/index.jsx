import React from "react";
import { View, Text, Dimensions } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const AccountVerification = ({label, socialAuthentication}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.item}>
          <View style={styles.verificationType}>
            <Icon 
              name={socialAuthentication} 
              size={20} 
              color={theme.palette.icon.main} 
            />
            <Text style={styles.text}>
              {socialAuthentication[0].toUpperCase() + socialAuthentication.substr(1)}
            </Text>
          </View>
          <CheckBox
            disabled={true}
            value={true}
            tintColor={theme.palette.checkBox.tintColor}
            onCheckColor={theme.palette.checkBox.onCheckColor}
            onFillColor={theme.palette.checkBox.onFillColor}
            onTintColor={theme.palette.checkBox.onTintColor}
          />
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
  wrapper: { 
    width:Dimensions.get("window").width - 20, 
    backgroundColor: theme.palette.primary.contrast,
    borderRadius:8,
    paddingBottom:10
  },
  label: {
    margin:15, 
    color: theme.palette.typograph.main,
    fontWeight:"600",
  },
  verificationType: {
    flexDirection:"row", 
    alignItems:"center",
  },
  text: {
    marginLeft:10,
    color: theme.palette.typograph.main,
  },
  item: {
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    height: 50,
    marginHorizontal: 12,
    marginVertical:6,
    backgroundColor: theme.palette.primary.main,
    borderRadius:8,
    padding: 10,
  },
}));

export default AccountVerification;