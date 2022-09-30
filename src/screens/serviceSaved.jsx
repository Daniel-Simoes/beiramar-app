import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import {useSelector} from "react-redux";
import {useActions} from "../redux/actions";
import {makeStyles, useTheme, Header, Photos, NoData} from "components";

import {useNavigation} from "@react-navigation/native";

const Saved = () => {
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();

  const trip = useSelector((state) => state.trip);
  const {UserGetOne} = useActions();

  React.useEffect(() => {
    UserGetOne(22);
  }, []);

  const goToTripDetails = (item) => {
    navigation.navigate('ServiceDetails', {
      id: item.id,
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

  const renderItem = ({item}) => {
    return (
      <>
        <Photos 
          photoUrl={item.coverPhoto}
          title={item.title}
          contextMenu={true}
          onpress={() => goToTripDetails(item)} 
        />
      </>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        // rightIcon={"search"}
        // rightIconColor={theme.palette.icon.main}
        // rightIconAction={() => alert("Search comming soon.")}
        label={"Saved"}
        badge={true}
      />
      <FlatList
        data={trip}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      {/* <NoData 
      menssage={"Você ainda nāo tem nenhum passeio salvo."}
      lottie
      /> */}
      
    </SafeAreaView>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1, 
    backgroundColor:theme.palette.primary.main,
  },
}));

export default Saved;
