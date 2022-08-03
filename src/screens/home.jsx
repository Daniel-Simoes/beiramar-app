import React from "react";
import { SafeAreaView, FlatList, StatusBar, View, Image} from "react-native";
import {useSelector} from "react-redux";
import {useActions} from "../redux/actions";
import { 
  makeStyles, 
  useTheme, 
  Header, 
  Service, 
  Chip 
} from "components";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import {useIsDrawerOpen} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();

  const [categorySelected, setCategorySelected] = React.useState("Todos");
  const [search, setSearch] = React.useState("");

  const isDrawerOpen = useIsDrawerOpen();

  const services = useSelector((state) => state.trip);
  const categories = useSelector((state) => state.category);

  const serviceCategory = [
    "Todos",
    ...categories,
  ];

  const searchServices = () => {
     const servicesFiltedByCategories = categorySelected === "Todos" ? services : services.filter((service) => {
      return service.categories.some((category) => (category === categorySelected));
    });
     const servicesFiltedByCategoriesAndSearch = search === "" ? servicesFiltedByCategories : servicesFiltedByCategories.filter((service) => (
       service.title.toLowerCase().trim().indexOf(search.toLowerCase().trim()) !== -1
     ));
     return servicesFiltedByCategoriesAndSearch || [];
  };

  const servicesFilted = searchServices();
  const {GetAllTrip, GetAllCategory} = useActions();

  React.useEffect(() => {
    GetAllTrip();
    GetAllCategory();
  }, []);

  const goToTripDetails = (item) => {
    navigation.navigate('ServiceDetails', {
      serviceId: item.id,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      city: item.city,
      state: item.state,
      routeMap: item.routeMap,
      price: item.price,
      warning: item.warning,
      distance: item.distance,
      stops: item.stops,
      duration: item.duration,
      coverPhoto: item.coverPhoto,
    });
  };

  const renderTrips = ({item}) => {
    return (
      <>
        <Service
          title={item.title} 
          goToTripDetails={() => goToTripDetails(item)} 
          rating={4}
          numberOfSaves={item.numberOfSaves}
          numberOfLikes={item.numberOfLikes}
          numberOfComments={item.numberOfComments}
          description={item.description}
          hashtags={item.hashtags}
          coverPhoto={item.coverPhoto}
          />
      </>
    );
  };

  const handleOpenDrawer = () => {
    ReactNativeHapticFeedback.trigger("impactLight");
    navigation.openDrawer();
  };

  
  return (
    <SafeAreaView style={styles.container}>
      { isDrawerOpen ? (
        <StatusBar barStyle="light-content" animated />
      ) : (
        <StatusBar barStyle="dark-content" animated />
      )}
      {/* <StatusBar barStyle={"dark-content"} backgroundColor={theme.palette.primary.main}/> */}
      <Header 
        leftIcon={"reorder"}
        leftIconColor={theme.palette.icon.main}
        leftIconAction={handleOpenDrawer}
        rightIcon={"search"}
        rightIconColor={theme.palette.icon.main}
        borderBottom={true}
        setSearch={setSearch}
        logo
        logo={true}
      />
      <Chip 
        tags={serviceCategory} 
        selected={categorySelected} 
        onChange={setCategorySelected}
        
      />
      <FlatList
        data={servicesFilted}
        renderItem={renderTrips}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1, 
    backgroundColor:theme.palette.primary.main,
  },
  logo: {
    height: 50,
    width:60,
  },
}));

export default Home;