import React from "react";
import { View, Text, Dimensions } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const CardPayment = ({
  toggleCheckBox1, 
  toggleCheckBox, 
  setToggleCheckBox1, 
  setToggleCheckBox,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Cartão de Crédito Cadastrados</Text>
        <View style={styles.item}>
          <View style={styles.verificationType}>
            <Icon name="cc-visa" size={35} color={theme.palette.icon.main} />
            <View>
              <Text style={styles.text}>Cartão de Crédito</Text>
              <Text style={styles.subtitle}>5227 **** **** 3356</Text>
            </View>
          </View>
          <CheckBox
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={(newValue) => setToggleCheckBox1(newValue)}
            tintColor={"#e5e5e5"}
            onCheckColor={"#FFF"}
            onFillColor={"#2F80ED"}
            onTintColor={"#2F80ED"}
          />
        </View>
        <View style={styles.item}>
          <View style={styles.verificationType}>
            <Icon name="cc-mastercard" size={35} color={theme.palette.icon.main} />
            <View>
              <Text style={styles.text}>Cartão de Crédito</Text>
              <Text style={styles.subtitle}>5227 **** **** 3356</Text>
            </View>
          </View>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            tintColor={"#e5e5e5"}
            onCheckColor={"#FFF"}
            onFillColor={"#2F80ED"}
            onTintColor={"#2F80ED"}
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
    backgroundColor:theme.palette.primary.contrast,
    borderRadius:8,
    paddingBottom:10
  },
  label: {
    margin:15, 
    color: theme.palette.typograph.main,
    fontSize:16, 
    fontWeight:"800",
  },
  verificationType: {
    flexDirection:"row", 
    alignItems:"center",
  },
  text: {
    marginLeft:10,
    color: theme.palette.typograph.main,
  },
  subtitle: {
    marginLeft:10,
    color: theme.palette.typograph.secondary,
  },
  item: {
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    marginHorizontal: 12,
    marginVertical:6,
    backgroundColor: theme.palette.primary.main,
    borderRadius:8,
    padding: 10,
    paddingVertical:20,
  },
}));

export default CardPayment;