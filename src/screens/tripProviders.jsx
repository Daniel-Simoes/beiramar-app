import React from "react";
import {SafeAreaView, FlatList} from "react-native";
import {Header, TripProvider, makeStyles, useTheme} from "components";
import {useNavigation, useRoute} from "@react-navigation/native";

const TripProviders = () => {
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const route = useRoute();
  const { 
    providers,
  } = route.params;

  const renderProviders = ({item}) => {
    return (
      <>
        <TripProvider 
          bio={item.bio}
          picture={item.picture}
          firstName={item.firstName}
          lastName={item.lastName}
          userId={item.id}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        leftIcon={"arrow-left"}
        leftIconColor={theme.palette.icon.main}
        leftIconAction={goBack}
        label={"Guias Disponíveis"}
        labelPosition={true}
      />

      <FlatList
        data={providers}
        renderItem={renderProviders}
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
}));

export default TripProviders;