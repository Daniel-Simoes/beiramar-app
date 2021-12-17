import React from "react";
import { 
  View, 
  Dimensions, 
  Text, 
  TouchableOpacity,
 } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const InformativeField = ({
  label,
  information,
  icon,
  iconColor,
  cardIcon,
  cardIconColor,
  secondIcon,
  secondCardIcon,
  secondCardIconColor,
  secondCardAction,
  note,
  pressable,
  pressableList,
  pressableLabel,
  action,
  schedule,
  secondPressableLabel,
}) => {
  const styles = useStyles();
  const theme = useTheme();


  const [firstOption, setFirstOption] = React.useState(true);
  const [secondOption, setSecondOption] = React.useState(false);
  const [thirdOption, setThirdOption] = React.useState(false);


  const handleFirstOption = () => {
    setFirstOption(true);
    setSecondOption(false);
    setThirdOption(false);
  };

  const handleSecondOption = () => {
    setSecondOption(true);
    setFirstOption(false);
    setThirdOption(false);
  };

  const handleThirdOption = () => {
    setThirdOption(true);
    setFirstOption(false);
    setSecondOption(false);
  };

  const firstOptionBorderColor = firstOption === true ? theme.palette.badge.main : theme.palette.primary.main;
  const firstOptionTextColor = firstOption === true ? theme.palette.primary.contrast : theme.palette.icon.main;
  const firstOptionBackgroundColor = firstOption === true ? theme.palette.badge.main : theme.palette.primary.main;

  const secondOptionBorderColor = secondOption === true ? theme.palette.badge.main : theme.palette.primary.main;
  const secondOptionTextColor = secondOption === true ? theme.palette.primary.contrast : theme.palette.icon.main;
  const secondOptionBackgroundColor = secondOption === true ? theme.palette.badge.main : theme.palette.primary.main;

  const thirdOptionBorderColor = thirdOption === true ? theme.palette.badge.main : theme.palette.primary.main;
  const thirdOptionTextColor = thirdOption === true ? theme.palette.primary.contrast : theme.palette.icon.main;
  const thirdOptionBackgroundColor = thirdOption === true ? theme.palette.badge.main : theme.palette.primary.main;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        { pressableList  ?
          <>
            <TouchableOpacity style={styles.button} onPress={action}>
              <View style={styles.buttonContent}>
                <Icon name={cardIcon} size={20} color={cardIconColor} />
                <Text style={styles.text}>{pressableLabel}</Text>
                <Text style={styles.text}>{information}</Text>
              </View>
              <Icon name={icon} size={20} color={iconColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={secondCardAction}>
              <View style={styles.buttonContent}>
                <Icon name={secondCardIcon} size={20} color={secondCardIconColor} />
                <Text style={styles.text}>{secondPressableLabel}</Text>
              </View>
              <Icon name={secondIcon} size={20} color={iconColor} />
            </TouchableOpacity>
          </>
          : pressable ?
          <TouchableOpacity style={styles.button} onPress={action}>
            <View style={styles.buttonContent}>
              <Icon name={cardIcon} size={20} color={cardIconColor} />
              <Text style={styles.text}>{pressableLabel}</Text>
              <Text style={styles.text}>{information}</Text>
            </View>
            <Icon name={icon} size={20} color={iconColor} />
          </TouchableOpacity>
          :
          <View style={styles.input}>
            <View style={styles.inputContent}>  
              <Text style={styles.text}>{information}</Text>
            </View>
            <Icon name={icon} size={20} color={iconColor} />
          </View>
        }
        {schedule &&
          <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
            <TouchableOpacity onPress={handleFirstOption} style={[styles.options, {borderColor:firstOptionBorderColor, backgroundColor: firstOptionBackgroundColor}]}>
              <Text style={{color: firstOptionTextColor}}>8AM - 12AM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSecondOption} style={[styles.options, {borderColor:secondOptionBorderColor, backgroundColor: secondOptionBackgroundColor}]}>
              <Text style={{color: secondOptionTextColor}}>9AM - 13AM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleThirdOption} style={[styles.options, {borderColor:thirdOptionBorderColor, backgroundColor: thirdOptionBackgroundColor}]}>
              <Text style={{color: thirdOptionTextColor}}>10AM - 14AM</Text>
            </TouchableOpacity>
          </View>
        }
        <View style={styles.note}>
          <Text style={styles.noteText}>{note}</Text>
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
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },
  wrapper: { 
    width:Dimensions.get("window").width - 20, 
    backgroundColor: theme.palette.primary.contrast,
    borderRadius:8, 
    paddingBottom:15,
  },
  label: {
    margin:15, 
    color: theme.palette.typograph.main, 
    fontWeight:"600",
  },
  input: {
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    margin: 12,
    backgroundColor: theme.palette.primary.main,
    borderRadius:8,
    padding: 10,
  },
  inputContent: {
    flexDirection:"row", 
    alignItems:"center",
  },
  text: {
    marginLeft:10,
    color: theme.palette.typograph.main,
  },
  note: {
    paddingHorizontal:20,
  },
  noteText: {
    color:theme.palette.typograph.secondary,
  },
  button: {
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    margin: 12,
    backgroundColor: theme.palette.primary.main,
    borderRadius:8,
    padding: 10,
  },
  buttonContent: {
    flexDirection:"row", 
    alignItems:"center",
  },
  options: { 
    paddingVertical:10, 
    width:100, 
    alignItems:"center", 
    justifyContent:"center", 
    borderRadius:8, 
    borderWidth:0.2,
  },
}));

export default InformativeField;