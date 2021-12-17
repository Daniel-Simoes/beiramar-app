import React from "react";
import { View, ScrollView, Dimensions, FlatList } from "react-native";
import {
  makeStyles,
  useTheme,
  Profile, 
  UploadPhoto, 
  AccountVerification, 
  Button, 
  BackButton,
  InputField
} from "components";

const socialAuthentication = [{socialAuthentication: "google"}];

const EditProfile = ({ navigation }) => {
  const styles = useStyles();
  const theme = useTheme();

  const [onChangeTextFirstInput, setOnChangeTextFirstInput] = React.useState(null); 
  const [onChangeTextSecondInput, setOnChangeTextSecondInput] = React.useState(null);
  const [valueFirstInput, setValueFirstInput] = React.useState(null); 
  const [valueSecondInput, setValueSecondInput] = React.useState(null);

  const renderSocialAuthentication = ({item}) => {
    return (
      <AccountVerification 
        label={"Verificação via Perfil Social"}
        socialAuthentication={item.socialAuthentication}
      />
    );
  };

  return (
    <View style={styles.container}>
      <BackButton 
        navigation={navigation}
        iconName={"close"}
        iconColor={theme.palette.icon.main}
        background={true}
        styleContainer={styles.backButtom}
      />
        <FlatList
          data={socialAuthentication}
          renderItem={renderSocialAuthentication}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <>
              <Profile bigAvatar={true}/>
              <InputField
                label={"Detalhes Pessoais"}
                firstInput={"Nome"} 
                secondInput={"Sobrenome"}
                firstPlaceholder={"Daniel"} 
                secondPlaceholder={"Simões"}
                onChangeTextFirstInput={onChangeTextFirstInput} 
                onChangeTextSecondInput={onChangeTextSecondInput}
                valueFirstInput={valueFirstInput} 
                valueSecondInput={valueSecondInput}
                icon={"pencil"}
              />
              <InputField
                label={"Configurações de Email"}
                firstInput={"Email"} 
                firstPlaceholder={"daniel.simoes@homail.com"} 
                onChangeTextFirstInput={onChangeTextFirstInput} 
                valueFirstInput={valueFirstInput} 
                icon={"pencil"}
                note={"Adicione um email valido para receber notificacoes sobre seus passeios, promocoes e novidades."}
              />
              <InputField
                bio={true}
                label={"Biografia"}
                firstPlaceholder={"Adicione a sua bio"} 
                onChangeTextFirstInput={onChangeTextFirstInput} 
                valueFirstInput={valueFirstInput} 
                note={"A bio devera conter no maximo 250 caracteres. Sua bio ficara disponivel para todos os usuarios."}
              />
              <UploadPhoto />
            </>
          }
          ListFooterComponent={
            <Button 
              label={"Salvar"}
              containerStyles={styles.containerStyles}
              buttonStyles={styles.buttonStyles}
              labelStyles={styles.labelStyles}
              onPress={() => alert("Salvar")}
            />
          }
        />
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex:1,
    backgroundColor:theme.palette.primary.main,
  },
  containerStyles: {
    marginVertical: 20,
    justifyContent:"center",
    alignItems: "center",
  },
  labelStyles: {
    color:"#fff",
    fontSize:16,
    fontWeight:"700"
  },
  buttonStyles: {
    width:Dimensions.get("window").width - 20, 
    backgroundColor: "#2F80ED",
    borderRadius: 12,
    paddingVertical:15,
    justifyContent:"center",
    alignItems:"center",
  },
  backButtom: {
    top:10,
  },
}));

export default EditProfile;