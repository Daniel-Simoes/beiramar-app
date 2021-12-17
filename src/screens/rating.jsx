import React from "react";
import {SafeAreaView} from "react-native";
import { makeStyles, useTheme } from "components";
import {useNavigation} from "@react-navigation/native";

import {Header, Feedback} from "components";

const Rating = () => {
  const styles = useStyles();
  const theme = useTheme();

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        leftIcon={"arrow-left"}
        leftIconColor={theme.palette.icon.main}
        leftIconAction={goBack}
        label={"Avaliações"}
        labelPosition={true}
      />
      <Feedback />
    </SafeAreaView>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    backgroundColor:theme.palette.primary.main,
  },
}));

export default Rating;

