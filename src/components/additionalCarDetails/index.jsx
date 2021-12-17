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

const AdditionalCarDetails = ({number1, onChangeNumber1}) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Detalhes Adicionais do Carro</Text>
        <View style={styles.input}>
          <View style={styles.labelInputContainer}>
            <Text style={{color:theme.palette.typograph.main}}>Suporte</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeNumber1}
              value={number1}
              placeholder={"4 pessoas"}
            />
            <TouchableOpacity>
              <Icon name="ellipsis-v" size={18} color={theme.palette.icon.main} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.labelInputContainer}>
            <Text style={{color:theme.palette.typograph.main}}>Internet</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeNumber1}
              value={number1}
              placeholder={"Sim"}
            />
            <TouchableOpacity>
              <Icon name="ellipsis-v" size={18} color={theme.palette.icon.main} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}>Adicione um email valido para receber notificacoes sobre seus passeios, promocoes e novidades.</Text>
        </View>
        <View style={styles.addDetailsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar Novo Detalhe</Text>
          </TouchableOpacity>
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
  },
  label: {
    margin:15, 
    color: theme.palette.typograph.main, 
    fontWeight:"600",
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    marginVertical:5,
    backgroundColor: theme.palette.primary.main,
    borderRadius:8,
    padding: 10,
    flexDirection:"row"
  },
  labelInputContainer: { 
    minWidth:70, 
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
},
note: {
  paddingHorizontal:20,
  paddingVertical:10,
},
noteText: {
  color: theme.palette.typograph.secondary,
},
lock: {
  marginRight:15, 
  marginBottom:20, 
  alignItems:"flex-end",
},
addDetailsContainer: {
  justifyContent:"center",
  alignItems:"center",
  paddingVertical:15,
},
button:{
width:"80%", 
backgroundColor: "#2F80ED",
borderRadius: 12,
paddingVertical:15,
justifyContent:"center",
alignItems:"center",
},
buttonText: {
color: theme.palette.typograph.main,
fontWeight:"700"
},
}));

export default AdditionalCarDetails;