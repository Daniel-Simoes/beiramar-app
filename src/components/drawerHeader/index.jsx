
import React from "react";
import {
  Dimensions,
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
} from "react-native";
import Animated, {interpolateNode} from "react-native-reanimated";
import {useSafeArea} from "react-native-safe-area-context";
import {useSelector} from "react-redux";
import {
  Avatar,
} from "components";



const DrawerHeader = (props) => {
  const {progress} = props;
  const {width, height} = useWindowDimensions();
  const insets = useSafeArea();
  const styles = useStyles({insets, width, height});

  // const user = useSelector((state) => state.user);
  // const userAccount = useSelector((state) => state.accountDetails);
  const credentials = useSelector((state) => state.credentials);

  return (
    <Animated.View
      style={[
        styles.profile,
        {
          top: insets.top + 10,
          opacity: interpolateNode(progress, {
            inputRange: [0.5, 1],
            outputRange: [0, 1],
          }),
          width: interpolateNode(progress, {
            inputRange: [0, 0.01, 1],
            outputRange: [
              0,
              Dimensions.get("window").width,
              Dimensions.get("window").width,
            ],
          }),
        },
      ]}>
      <View style={styles.svg}>
             <Avatar
           containerStyle={{
             width: 60,
             height: 60,
             borderRadius: 30,
           }}
           picture={credentials.user.photoURL}
           border={true}
         /> 
        <View style={{flexDirection: "column", justifyContent: "center"}}>
          {/* {userAccount.accountName ? ( */}
            <Text style={styles.text}>Oi, 👋</Text>
          {/* ) : ( */}
            <Text style={styles.text}>{credentials.user.displayName}</Text>
          {/* )} */}
        </View>
      </View>
    </Animated.View>
  );
};

const useStyles = StyleSheet.create((theme, props) => ({
  profile: {
    position: "absolute",
    left: 16,
    height: 80,
    justifyContent: "center",
  },
  svg: {
    flexDirection: "row",
    paddingLeft: 12,
  },
  text: {
    // alignSelf: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  welcome: {
    marginBottom: 20,
  },
  regular: {
    fontWeight: "400",
  },
}));

export default DrawerHeader;
