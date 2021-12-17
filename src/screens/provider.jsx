import React from "react";
import {
  SafeAreaView, 
  View, 
  FlatList, 
  Text,
  Dimensions,
} from "react-native";
import {Header, Profile, TripCard} from "components";
import { makeStyles, useTheme } from "components";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useActions} from "../redux/actions";
import {useSelector} from "react-redux";


const Provider = () => {
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();

  const goBack = () => {
    navigation.goBack();
  };

  const { 
    userId,
  } = route.params;

  const {UserGetOne} = useActions();

  React.useEffect(() => {
    UserGetOne(userId);
  }, [userId]);

  const oneUser = useSelector((state) => state.oneUser);

  const trips = oneUser.services
  
  const renderTripCard = ({ item }) => (
    <TripCard 
      trip={item.title}
      subtitle={item.subtitle} 
      amount={item.price} 
      photo={item.coverPhoto}
      distance={item.distance}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        leftIcon={"arrow-left"}
        leftIconColor={theme.palette.icon.main}
        leftIconAction={goBack}
        label={"Perfil do Guia"}
        labelPosition={true}
      />
      <FlatList
        ListHeaderComponent={
          <Profile 
            followers= {true}
            contact={true}
            rating={true}
            firstName={oneUser.firstName} 
            lastName={oneUser.lastName}
            phone={oneUser.phone}
            picture={oneUser.picture}
            followings={oneUser.followings}
            email={oneUser.email}
          />
        }
        ListFooterComponent={
          <View style={styles.content}>    
            <View style={styles.wrapper}>
              <Text style={styles.title}>Passeios Cadastrados</Text>
              <FlatList
                data={trips}
                renderItem={renderTripCard}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
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
  },
  wrapper: { 
    width:Dimensions.get("window").width - 20, 
    backgroundColor:"#fff",
    borderRadius:8, 
    paddingBottom:15,
  },
  title: {
    margin:15, 
    color:"#333", 
    fontWeight:"600",
  },
}));

export default Provider;
