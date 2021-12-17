import React from "react";
import {SafeAreaView, Dimensions, ScrollView} from "react-native";
import {
  makeStyles, 
  useTheme, 
  Header, 
  TripCard, 
  ProviderCard, 
  InformativeField, 
  Total,
  Button
} from "components";
import {useNavigation, useRoute} from "@react-navigation/native";
import DatePicker from '../components/calendar/src/componets/index';

const Appointment = () => {
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();
  const { 
    title, 
    price, 
    distance,
    city,
    state,
    coverPhoto,
    providers,
  } = route.params;

  const goBack = () => {
    navigation.goBack();
  };
  const goToSuccessfully = () => {
    navigation.navigate("Successfully");
  };

  const [checkBox, setCheckBox] = React.useState(true);

  const goToGatway = () => {
    navigation.navigate("Gatway");
  };

  const goToCoupon = () => {
    navigation.navigate("Coupon");
  };

  const goToTripProviders = (providers) => {
    navigation.navigate("TripProviders", {
      providers: providers
    });
  };



  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [datePickerSelected, setDatePickerSelected] = React.useState("Selecione uma data");

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = (date) => {
    // You should close the modal in here
    setShowDatePicker(false);
    const fullDate = new Date(date).toJSON().slice(0,10).split('-').reverse().join('/');
    setDatePickerSelected(fullDate.toString());
  };



  return (
    <SafeAreaView style={styles.container}>
      <Header 
        leftIcon={"arrow-left"}
        leftIconColor={theme.palette.icon.main}
        leftIconAction={goBack}
        label={"Agendar Passeio"}
      />
      <ScrollView>
        <TripCard
          title={[city,`,`,state]} 
          trip={title} 
          subtitle={price} 
          photo={coverPhoto}
          checkBox={checkBox}
          setCheckBox={setCheckBox}
          distance={distance}
          appointment={true}
          backgroundColor={"#fff"}
        />
        <InformativeField                  
          label={"Selecione Data & Hora"}
          icon={"chevron-down"}
          iconColor={"#2F80ED"}
          cardIcon={"calendar"}
          cardIconColor={"#333"}
          pressable={true}
          pressableLabel={datePickerSelected}
          schedule={true}
          action={openDatePicker}
        />        

        <DatePicker
          isVisible={showDatePicker}
          mode={'single'}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
        <ProviderCard 
          checkBox={checkBox}
          setCheckBox={setCheckBox}
          onPress={() => goToTripProviders(providers)}
          providers={providers}
        />
        <InformativeField                  
          label={"Método de Pagamento"}
          icon={"chevron-right"}
          iconColor={"#2F80ED"}
          cardIcon={"credit-card"}
          cardIconColor={"#333"}
          pressableList={true}
          pressableLabel={"Teminado em..."}
          secondIcon={"chevron-right"}
          secondCardIcon={"gift"}
          secondCardIconColor={"#333"}
          secondPressableLabel={"Gift"}
          action={goToGatway}
          secondCardAction={goToCoupon}
          information={"3356"}
        />
        <Total price={price}/>
        <Button 
            label={"Finalizar"}
            containerStyles={styles.containerStyles}
            buttonStyles={styles.buttonStyles}
            labelStyles={styles.labelStyles}
            onPress={goToSuccessfully}
          />
      </ScrollView>
    </SafeAreaView>
  )
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

export default Appointment;