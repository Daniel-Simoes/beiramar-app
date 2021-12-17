import React from "react";
import {View, Text} from "react-native";
import { makeStyles, useTheme } from "components";

const NoData = () => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text>SEM DATA</Text>
    </View>    
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    backgroundColor:theme.palette.primary.main,
    alignItems: "center",
    justifyContent: "center"
  },
}));

export default NoData;
