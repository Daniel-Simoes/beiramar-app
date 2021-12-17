import React from "react";
import {SafeAreaView, Dimensions, FlatList} from "react-native";
import {Header, InputField, Button, CardPayment} from "components";
import { makeStyles, useTheme } from "components";
import {useNavigation} from "@react-navigation/native";

const TripCardData = [
  {
    id: '1',
    trip: "Praia de Pipa",
    title: 'Daniel Simoes',
    subtitle: '11/06/2021 - 08:40hs',
    photo: "https://placeimg.com/640/480/nature",
    amount: 'R$: 220,00',
  },
];

const Gatway = () => {
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const [onChangeTextFirstInput, setOnChangeTextFirstInput] = React.useState(null); 
  const [onChangeTextSecondInput, setOnChangeTextSecondInput] = React.useState(null);
  const [onChangeTextThirdInput, setOnChangeTextThirdInput] = React.useState(null);
  const [onChangeTextFourthInput, setOnChangeTextFourthInput] = React.useState(null);
  const [onChangeTextFifthInput, setOnChangeTextFifthInput] = React.useState(null);
  const [valueFirstInput, setValueFirstInput] = React.useState(null); 
  const [valueSecondInput, setValueSecondInput] = React.useState(null);
  const [valueThirdInput, setValueThirdInput] = React.useState(null);
  const [valueFourthInput, setValueFourthInput] = React.useState(null);
  const [valueFifthInput, setValueFifthInput] = React.useState(null);

  const [toggleCheckBox1, setToggleCheckBox1] = React.useState(true);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  const renderTripCard = ({ item }) => (
    <CardPayment 
      toggleCheckBox1={toggleCheckBox1} 
      toggleCheckBox={toggleCheckBox} 
      setToggleCheckBox1={setToggleCheckBox1} 
      setToggleCheckBox={setToggleCheckBox}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        leftIcon={"arrow-left"}
        leftIconColor={theme.palette.icon.main}
        leftIconAction={goBack}
        label={"Método de Pagamento"}
        labelPosition={true}
      />
      <FlatList
        data={TripCardData}
        renderItem={renderTripCard}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <> 
            <InputField
              label={"Adicione um cartao de credito"}
              firstInput={"Nome"} 
              secondInput={"Número"}
              thirdInput={"Mês"}
              fourthInput={"Ano"}
              fifthInput={"Código"}
              firstPlaceholder={"Nome do cartao"} 
              secondPlaceholder={"Número do cartao"}
              thirdPlaceholder={"Mês de vencimento"}
              fourthPlaceholder={"Ano de vencimento"}
              fifthPlaceholder={"Código de segurança"}
              onChangeTextFirstInput={onChangeTextFirstInput} 
              onChangeTextSecondInput={onChangeTextSecondInput}
              onChangeTextThirdInput={onChangeTextThirdInput}
              onChangeTextFourthInput={onChangeTextFourthInput}
              onChangeTextFifthInput={onChangeTextFifthInput}
              valueFirstInput={valueFirstInput} 
              valueSecondInput={valueSecondInput}
              valueThirdInput={valueThirdInput}
              valueFourthInput={valueFourthInput}
              valueFifthInput={valueFifthInput}
              icon={"pencil"}
              note={"Adcione seu email para poder alterar os detalhes do seu carro."}
            />
            <Button 
              label={"Salvar"}
              containerStyles={styles.containerStyles}
              buttonStyles={styles.buttonStyles}
              labelStyles={styles.labelStyles}
              onPress={() => alert("Salvar")}
            />  
          </>
        }
      />
    </SafeAreaView>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
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
}));

export default Gatway;

