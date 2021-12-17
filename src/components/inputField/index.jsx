import React from "react";
import { 
  View, 
  Text, 
  TextInput,
  Dimensions, 
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const InputField = ({
  firstInput, 
  secondInput,
  thirdInput,
  fourthInput,
  fifthInput,
  firstPlaceholder, 
  secondPlaceholder,
  thirdPlaceholder,
  fourthPlaceholder,
  fifthPlaceholder,
  onChangeTextFirstInput, 
  onChangeTextSecondInput,
  onChangeTextThirdInput,
  onChangeTextFourthInput,
  onChangeTextFifthInput,
  valueFirstInput, 
  valueSecondInput,
  valueThirdInput,
  valueFourthInput,
  valueFifthInput,
  label,
  icon,
  note,
  locked,
  unlokedInput,
  bio,
  }) => {
    const styles = useStyles({bio});
    const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        {firstInput && 
          <View style={styles.input}>
            <View style={styles.labelInputContainer}>
              <Text style={{color:theme.palette.typograph.main}}>{firstInput}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeTextFirstInput}
                value={valueFirstInput}
                placeholder={firstPlaceholder}
              />
              <Icon name={icon} size={14} color={theme.palette.icon.main} />
            </View>
          </View>
        }
        {secondInput && 
          <View style={styles.input}>
            <View style={styles.labelInputContainer}>
              <Text style={{color:theme.palette.typograph.main}}>{secondInput}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeTextSecondInput}
                value={valueSecondInput}
                placeholder={secondPlaceholder}
              />
              <Icon name={icon} size={14} color={theme.palette.icon.main} />
            </View>
          </View>
        }
        {thirdInput && 
          <View style={styles.input}>
           <View style={styles.labelInputContainer}>
             <Text style={{color:theme.palette.typograph.main}}>{thirdInput}</Text>
           </View>
           <View style={styles.inputContainer}>
             <TextInput
               style={styles.textInput}
               onChangeText={onChangeTextThirdInput}
               value={valueThirdInput}
               placeholder={thirdPlaceholder}
             />
             <Icon name={icon} size={14} color={theme.palette.icon.main} />
           </View>
          </View>     
        }
        {fourthInput && 
          <View style={styles.input}>
            <View style={styles.labelInputContainer}>
              <Text style={{color:theme.palette.typograph.main}}>{fourthInput}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeTextFourthInput}
                value={valueFourthInput}
                placeholder={fourthPlaceholder}
              />
              <Icon name={icon} size={14} color={theme.palette.icon.main} />
            </View>
          </View>
        }
        {fifthInput && 
          <View style={styles.input}>
            <View style={styles.labelInputContainer}>
              <Text style={{color:theme.palette.typograph.main}}>{fifthInput}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeTextFifthInput}
                value={valueFifthInput}
                placeholder={fifthPlaceholder}
              />
              <Icon name={icon} size={14} color={theme.palette.icon.main} />
            </View>
          </View>
        }
        {bio && 
          <View style={styles.input}>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={4}
                maxLength={250}
                onChangeText={onChangeTextFirstInput}
                value={valueFirstInput}
                placeholder={firstPlaceholder}
                multiline={true}
                scrollEnabled={true}
              />
            </View>
          </View>
        }
        { note &&
          <>
            <View style={styles.note}>
              <Text style={styles.noteText}>{note}</Text>
            </View>
            { locked &&
              <TouchableOpacity style={styles.lock} onPress={unlokedInput}>
                <Icon name="lock" size={20} color={theme.palette.icon.locked} />
              </TouchableOpacity> 
            }
          </>
        }     
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
  },
  label: {
    margin:15, 
    color: theme.palette.typograph.main,
    fontSize:16, 
    fontWeight:"800",
  },
  input: {
    height: props.bio ? 120 : 40,
    marginHorizontal: 12,
    marginVertical:5,
    backgroundColor: theme.palette.primary.main,
    borderRadius:8,
    padding: 10,
    flexDirection:"row",
  },
  labelInputContainer: { 
    minWidth:85, 
    borderRightWidth:1, 
    borderRightColor: theme.palette.border.main,
  },
inputContainer: { 
  flex:1, 
  flexDirection:"row", 
  justifyContent:"space-between",
},
textInput: {
  marginLeft:10,
  width:"90%",
  color: theme.palette.typograph.main,
},
note: {
  paddingHorizontal:20,
  paddingVertical:10,
},
noteText: {
  color: theme.palette.typograph.secondary,
},
lock: {
  marginRight:25, 
  marginBottom:10, 
  alignItems:"flex-end",
},
bio: {
  height: 130,
  marginHorizontal: 12,
  backgroundColor:"#f1f1f1",
  borderRadius:8,
  padding: 10,
},
}));

export default InputField;