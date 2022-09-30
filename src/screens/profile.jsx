import React from "react";
import {
  SafeAreaView, 
  FlatList,
  Dimensions,
  View,
  Text,
  Alert,
  Modal,
} from "react-native";
import {
  Header, 
  Profile, 
  ProfileOptions, 
  Stars, 
  NewEntries,
  TripCard,
  InformativeField,
  InputField,
  UploadPhoto,
  AdditionalCarDetails,
  Button,
  Graphic,
  NoData
} from "components";
import {useNavigation} from "@react-navigation/native";
import { makeStyles, useTheme } from "components";


const NewEntriesData = false;

// const NewEntriesData = [
//   {
//     id: '1',
//     title: 'Daniel Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     amount: 'R$: 220,00',
//     photo: "https://placeimg.com/640/480/nature",
//     type: "get",
//   },
//   {
//     id: '2',
//     title: 'Tamy Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     amount: 'R$: 220,00',
//     photo: "https://placeimg.com/640/480/nature",
//     type: "paid",
//   },
//   {
//     id: '3',
//     title: 'Selma Bernardino',
//     subtitle: '11/06/2021 - 08:40hs',
//     amount: 'R$: 220,00',
//     photo: "https://placeimg.com/640/480/nature",
//     type: "issue",
//   },
// ];



const TripCardData = false;

// const TripCardData = [
//   {
//     id: '1',
//     trip: "Praia de Pipa",
//     title: 'Daniel Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     photo: "https://placeimg.com/640/480/nature",
//     amount: 'R$: 220,00',
//     distance: "200"
//   },
//   {
//     id: '2',
//     trip: "Praia de Zumbí",
//     title: 'Tamy Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     photo: "https://placeimg.com/640/480/nature",
//     amount: 'R$: 220,00',
//     distance: "200"
//   },
//   {
//     id: '3',
//     trip: "Praia de Pipa",
//     title: 'Daniel Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     photo: "https://placeimg.com/640/480/nature",
//     amount: 'R$: 220,00',
//     distance: "200"
//   },
//   {
//     id: '4',
//     trip: "Praia de Zumbí",
//     title: 'Tamy Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     photo: "https://placeimg.com/640/480/nature",
//     amount: 'R$: 220,00',
//     distance: "200"
//   },
//   {
//     id: '5',
//     trip: "Praia de Pipa",
//     title: 'Daniel Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     photo: "https://placeimg.com/640/480/nature",
//     amount: 'R$: 220,00',
//     distance: "200"
//   },
//   {
//     id: '6',
//     trip: "Praia de Zumbí",
//     title: 'Tamy Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     photo: "https://placeimg.com/640/480/nature",
//     amount: 'R$: 220,00',
//     distance: "200"
//   },
//   {
//     id: '7',
//     trip: "Praia de Pipa",
//     title: 'Daniel Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     photo: "https://placeimg.com/640/480/nature",
//     amount: 'R$: 220,00',
//     distance: "200"
//   },
//   {
//     id: '8',
//     trip: "Praia de Zumbí",
//     title: 'Tamy Simoes',
//     subtitle: '11/06/2021 - 08:40hs',
//     photo: "https://placeimg.com/640/480/nature",
//     amount: 'R$: 220,00',
//     distance: "200"
//   },
// ];

const RatingData = [
  {
    id: '1',
    rating: 5,
  },
  {
    id: '2',
    rating: 4,
  },
  {
    id: '3',
    rating: 3,
  },
  {
    id: '4',
    rating: 2,
  },
  {
    id: '5',
    rating: 1,
  },
];

const ProfileScreen = () => {
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();
  const goToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const goToGatway = () => {
    navigation.navigate("Gatway");
  };

  const goToRating = () => {
    navigation.navigate("Rating");
  };

  const [statistics, setStatistics] = React.useState(true);
  const [payment, setPayment] = React.useState(false);
  const [statusCar, setStatusCar] = React.useState(false);
  const [rating, setRating] = React.useState(false);

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

  const [number1, onChangeNumber1] = React.useState(null);

  const renderNewEntries = ({ item }) => (
    <NewEntries 
      title={item.title} 
      subtitle={item.subtitle} 
      amount={item.amount}
      photo={item.photo}
      type={item.type}
      noData={true}
    />
  );

  const renderTripCard = ({ item }) => (
    <TripCard 
      // title={"item.title"} 
      trip={item.trip} 
      subtitle={item.subtitle} 
      amount={item.amount} 
      photo={item.photo}
      distance={item.distance}
    />
  );

  const renderRating = ({ item }) => (
    <Stars 
      goToRating={goToRating}
      rating={item.rating}
    />
  );

  const handleStatisticsChoice = () => {
    setStatistics(true);
    setPayment(false);
    setStatusCar(false);
    setRating(false);
  };

  const handlePaymentChoice = () => {
    setPayment(true);
    setStatistics(false);
    setStatusCar(false);
    setRating(false);
  };

  const handleStatusCarChoice = () => {
    setStatusCar(true);
    setStatistics(false);
    setPayment(false);
    setRating(false);
  };

  const handleRatingChoice = () => {
    setRating(true);
    setPayment(false);
    setStatistics(false);
    setStatusCar(false);
  };

  const statisticsBackgroundColor = statistics === true ? theme.palette.badge.main : theme.palette.primary.contrast;
  const statisticsIconColor = statistics === true ? theme.palette.icon.secondary : theme.palette.icon.main;

  const paymentBackgroundColor = payment === true ? theme.palette.badge.main : theme.palette.primary.contrast;
  const paymentIconColor = payment === true ? theme.palette.icon.secondary : theme.palette.icon.main;

  const statusCarBackgroundColor = statusCar === true ? theme.palette.badge.main : theme.palette.primary.contrast;
  const statusCarIconColor = statusCar === true ? theme.palette.icon.secondary : theme.palette.icon.main;

  const ratingBackgroundColor = rating === true ? theme.palette.badge.main : theme.palette.primary.contrast;
  const ratingIconColor = rating === true ? theme.palette.icon.secondary : theme.palette.icon.main;

  const unlokedInput = () =>
    Alert.alert(
      "Alerta",
      "Autoriza editar as informações do carro?",
      [
        {
          text: "Voltar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        rightIcon={"ellipsis-v"}
        rightIconColor={theme.palette.icon.main}
        rightIconAction={goToEditProfile}
        label={"Perfil"}
        badge={true}
        modal={true}
      />
      <FlatList
        ListHeaderComponent={
          <>
            <Profile 
              bigAvatar
              firstName={"Daniel"} 
              lastName={"Simões"}
              picture={"https://img.a.transfermarkt.technology/portrait/header/336333-1510686427.PNG?lm=1"}
              email={"daniel.simoes@hotmail.com"}
              // feedback={true}
              // followers= {true}
              // followers= {true}
            />
            <ProfileOptions
              handleStatisticsChoice={handleStatisticsChoice}
              handlePaymentChoice={handlePaymentChoice}
              handleStatusCarChoice={handleStatusCarChoice}
              handleRatingChoice={handleRatingChoice}
              statisticsBackgroundColor={statisticsBackgroundColor}
              paymentBackgroundColor={paymentBackgroundColor}
              statusCarBackgroundColor={statusCarBackgroundColor}
              ratingBackgroundColor={ratingBackgroundColor}
              statisticsIconColor={statisticsIconColor}
              paymentIconColor={paymentIconColor}
              statusCarIconColor={statusCarIconColor}  
              ratingIconColor={ratingIconColor}
              provider={true}
            />
            { payment && 
              <>
                <InformativeField                  
                  label={"Método de pagamento"}
                  information={"3333"}
                  icon={"arrow-right"}
                  iconColor={theme.palette.icon.main}
                  cardIcon={"cc-visa"}
                  cardIconColor={theme.palette.icon.main}
                  note={"Adicione um email valido para receber notificacoes sobre seus passeios, promocoes e novidades."}
                  pressable={true}
                  pressableLabel={"Teminado em..."}
                  action={goToGatway}
                /> 
                <View style={styles.content}>    
                  <View style={styles.wrapper}>
                  <Text style={styles.title}>Novas Entradas</Text>
                  { NewEntriesData ?
                  <FlatList
                    data={NewEntriesData}
                    renderItem={renderNewEntries}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{paddingBottom:50}}
                  />
                  :
                    <NoData 
                    menssage={"Você ainda nāo tem nenhum pagamento em espera"}/>
                  }
                  
                </View>
              </View>
              {/* <Graphic graphType={"line"}/> */}
              </> 
            }
            { statistics && 
              <>
                {/* <Graphic graphType={"bar"}/>  */}
                <View style={styles.content}>    
                  <View style={styles.wrapper}>
                    <Text style={styles.title}>Passeios Próximos</Text>
                    { TripCardData ?
                    <FlatList
                    data={TripCardData}
                    renderItem={renderTripCard}
                    keyExtractor={item => item.id}
                  />
                  :
                    <NoData 
                    menssage={"Você ainda nāo tem nenhum passeio cadastrado"}/>
                  }
                  </View>
                </View>
              </>
            }
            { statusCar && 
              <>
                <InformativeField
                  label={"Numero de Registro"}
                  information={"#0001"}
                  icon={"lock"}
                  iconColor={theme.palette.icon.locked}
                  note={"Adicione um email valido para receber notificacoes sobre seus passeios, promocoes e novidades."}
                /> 
                <InformativeField
                  label={"Status"}
                  information={"Disponível"}
                  icon={"check"}
                  iconColor={theme.palette.icon.check}
                  note={"Adicione um email valido para receber notificacoes sobre seus passeios, promocoes e novidades."}
                /> 
                <InputField
                  label={"Detalhes do Carro"}
                  firstInput={"Modelo"} 
                  secondInput={"Ano"}
                  thirdInput={"Cor"}
                  fourthInput={"Placa"}
                  fifthInput={"Renavan"}
                  firstPlaceholder={"Buggy"} 
                  secondPlaceholder={"2000"}
                  thirdPlaceholder={"Verde"}
                  fourthPlaceholder={"NXT-2021"}
                  fifthPlaceholder={"DFAT-2435-2563-8766"}
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
                  locked={true}
                  unlokedInput={unlokedInput}
                />
                <InputField 
                  label={"Detalhes do Condutor"}
                  firstInput={"Nome"} 
                  secondInput={"CNH"}
                  thirdInput={"Status"}
                  firstPlaceholder={"Daniel Simões"} 
                  secondPlaceholder={"RN2345423324"}
                  thirdPlaceholder={"Disponível"}
                  onChangeTextFirstInput={onChangeTextFirstInput} 
                  onChangeTextSecondInput={onChangeTextSecondInput}
                  onChangeTextThirdInput={onChangeTextThirdInput}
                  valueFirstInput={valueFirstInput} 
                  valueSecondInput={valueSecondInput}
                  valueThirdInput={valueThirdInput}
                  icon={"pencil"}
                  note={"Adcione seu email para poder alterar os detalhes do seu carro."}
                  locked={false}
                />
                <AdditionalCarDetails onChangeNumber1={onChangeNumber1} number1={number1}/>
                <UploadPhoto />
                <Button 
                  label={"Salvar"}
                  containerStyles={styles.containerStyles}
                  buttonStyles={styles.buttonStyles}
                  labelStyles={styles.labelStyles}
                  onPress={() => alert("Salvar")}
                />
              </>
            }
          </>
        }
        ListFooterComponent={
          <>
            { payment && 
              <View style={styles.content}>    
                <View style={styles.wrapper}>
                  <Text style={styles.title}>Pagamentos Finalizados</Text>
                  
                  { TripCardData ?
                    <FlatList
                    data={TripCardData}
                    renderItem={renderTripCard}
                    keyExtractor={item => item.id}
                  />
                  :
                    <NoData 
                    menssage={"Você ainda nāo tem nenhum pagamento finalizado"}/>
                  }
                </View>
              </View>
            }
            { rating && 
              <FlatList
                data={RatingData}
                renderItem={renderRating}
                keyExtractor={item => item.id}
                style={{paddingTop:10}}
              />
            }
            { statistics && 
              <View style={styles.content}>    
                  <View style={styles.wrapper}>
                  <Text style={styles.title}>Passeios Finalizados</Text>
                  { TripCardData ?
                    <FlatList
                    data={TripCardData}
                    renderItem={renderTripCard}
                    keyExtractor={item => item.id}
                  />
                  :
                    <NoData 
                    menssage={"Você ainda nāo tem nenhum passeio finalizado"}/>
                  }
                </View>
              </View>
            }
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
  content: {
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
  title: {
    margin:15, 
    color:"#333", 
    fontWeight:"600",
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

export default ProfileScreen;
