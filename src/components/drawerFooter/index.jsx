import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  useWindowDimensions,
  Alert,
} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Animated, {interpolateNode} from "react-native-reanimated";
// import Icon from "components/Icon";
// import {makeStyles} from "mova-rn-helpers/theme";
import {useNavigation} from "@react-navigation/native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
// import {useActions} from "actions";
// import ToggleSwitch from "toggle-switch-react-native";
// import {useSelector} from "react-redux";
// import {version} from "../../../package.json";
import Icon from "react-native-vector-icons/FontAwesome";


import { 
  makeStyles, useTheme
} from "components";

const DrawerFooter = (props) => {

  const {progress} = props;
  const {width, height} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const styles = useStyles({insets, height});
  const navigation = useNavigation();
  const theme = useTheme();
  // const keyboardType = useSelector((state) => state.keyboardType);

  // const {Logout, KeyboardNumeric, KeyboardAlphaNumeric} = useActions();

  // const handleLogout = async () => {
  //   await Logout();
  //   navigation.replace("Login");
  // };

  const logout = () => {
    ReactNativeHapticFeedback.trigger("impactLight");
    Alert.alert("Alerta", "Você gostaria de sair o aplicativo?", [
      {
        text: "Cancelar",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {text: "SIM", onPress: () => handleLogout()},
    ]);
  };

  return (
    <Animated.View
      style={[
        styles.profile,
        {
          opacity: interpolateNode(progress, {
            inputRange: [0.5, 1],
            outputRange: [0, 1],
          }),
          width: interpolateNode(progress, {
            inputRange: [0, 0.0001, 1],
            outputRange: [0, width, width],
          }),
        },
      ]}>
      <View style={{flexDirection: "column"}}>
        <View style={styles.toggleTitle}/>
        <View style={styles.toggleWrapper}>
        </View>
        <TouchableOpacity style={styles.button} onPress={logout}>
        <Icon name={"sign-out"} size={24} color={theme.palette.primary.contrast} />
          <Text style={styles.logout}>Sair</Text>
        </TouchableOpacity>
        <Text style={styles.appVersion}>Beiramar v1.0.0</Text>
      </View>
    </Animated.View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  profile: {
    position: "absolute",
    left: 0,
    top: props.height - Math.max(props.insets.bottom, 20) - 160,
    paddingLeft: 30,
    flexDirection: "row",
  },
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  logout: {
    marginLeft: 8,
    marginRight: 30,
    color: theme.palette.primary.contrast,
    fontWeight: "700",
  },
  appVersion: {
    marginTop: 3,
    marginLeft: 3,
    color: theme.palette.primary.contrast,
    fontSize: 12,
  },
  toggleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  toggleTitle: {
    marginBottom: 10,
    color: "#fff",
    fontWeight: "bold",
  },
}));

export default DrawerFooter;
