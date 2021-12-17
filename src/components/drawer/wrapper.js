import React from "react";
import {View, useWindowDimensions, StyleSheet} from "react-native";
import Animated, {interpolateNode} from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";

const DrawerWrapper = ({children, ...props}) => {
  const {progress} = props;

  const page = useWindowDimensions();
  const [pageHeight, setPageHeight] = React.useState(page.height);
  const styles = useStyles();

  const measure = ({nativeEvent}) => setPageHeight(nativeEvent.layout.height);

  return (
    <LinearGradient colors={["#0A3C70", "#2F80ED"]}  style={{flex:1}}>
    <View style={styles.wrapper} onLayout={measure}>
      <Animated.View
        style={[
          styles.firstScreen,
          {
            height: pageHeight,
            shadowOpacity: interpolateNode(progress, {
              inputRange: [0, 1],
              outputRange: [0, 0.5],
            }),
            transform: [
              {
                scaleX: interpolateNode(progress, {
                  inputRange: [0, 1],
                  outputRange: [1, 0.7],
                }),
              },
              {
                scaleY: interpolateNode(progress, {
                  inputRange: [0, 1],
                  outputRange: [1, 0.7],
                }),
              },
              {
                translateX: interpolateNode(progress, {
                  inputRange: [0, 1],
                  outputRange: [0, -40],
                }),
              },
            ],
          },
        ]}>
        <Animated.View
          style={[
            styles.screenWrapper,
            {
              borderRadius: interpolateNode(progress, {
                inputRange: [0, 0.01, 1],
                outputRange: [0, 30, 30],
              }),
            },
          ]}>
          {children}
        </Animated.View>
      </Animated.View>
    </View>
    </LinearGradient>
  );
};

const useStyles = StyleSheet.create(() => ({
  wrapper: {
    flex: 1,
  },
  firstScreen: {
    shadowColor: "#888",
    shadowRadius: 10,
    elevation: 3,
  },
  screenWrapper: {
    flex: 1,
    overflow: "hidden",
  },
}));

export default DrawerWrapper;
