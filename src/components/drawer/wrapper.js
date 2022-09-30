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
          styles.secondScreen,
          {
            opacity: 0.4,
            height: pageHeight,
            marginBottom: -pageHeight,
            shadowOpacity: interpolateNode(progress, {
              inputRange: [0, 1],
              outputRange: [0, 0.3],
            }),
            transform: [
              {
                translateX: interpolateNode(progress, {
                  inputRange: [0, 1],
                  outputRange: [-10, -page.width * 0.20],
                }),
              },
              {
                scaleX: interpolateNode(progress, {
                  inputRange: [0, 1],
                  outputRange: [0.95, 0.6],
                }),
              },
              {
                scaleY: interpolateNode(progress, {
                  inputRange: [0, 1],
                  outputRange: [0.95, 0.6],
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
    backgroundColor: "transparent",
  },
  firstScreen: {
    shadowColor: "#888",
    shadowRadius: 10,
    elevation: 3,
  },
    secondScreen: {
    backgroundColor: "#fff",
    opacity: 0.9,
    shadowColor: "rgba(51,51,51,1.0)",
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    elevation: 1,
    width: "100%",
    borderRadius: 30,
  },
  thirdScreen: {
    backgroundColor: "red",
    // opacity: 0.9,
    shadowColor: "rgba(51,51,51,1.0)",
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    elevation: 1,
    width: "100%",
    borderRadius: 30,
  },
  screenWrapper: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
}));

export default DrawerWrapper;







// import React from "react";
// import {View, useWindowDimensions, StyleSheet} from "react-native";
// import Animated, {interpolateNode} from "react-native-reanimated";
// import {useSafeArea} from "react-native-safe-area-context";

// const DrawerWrapper = ({children, ...props}) => {
//   const {progress} = props;

//   const insets = useSafeArea();
//   const page = useWindowDimensions();
//   const [pageHeight, setPageHeight] = React.useState(page.height);
//   const styles = useStyles({insets, page});

//   const measure = ({nativeEvent}) => setPageHeight(nativeEvent.layout.height);

//   return (
//     <View style={styles.wrapper} onLayout={measure}>
//       <Animated.View
//         style={[
//           styles.secondScreen,
//           {
//             opacity: 0.2,
//             height: pageHeight,
//             marginBottom: -pageHeight,
//             shadowOpacity: interpolateNode(progress, {
//               inputRange: [0, 1],
//               outputRange: [0, 0.3],
//             }),
//             transform: [
//               {
//                 translateX: interpolateNode(progress, {
//                   inputRange: [0, 1],
//                   outputRange: [-10, -page.width * 0.18],
//                 }),
//               },
//               {
//                 scaleX: interpolateNode(progress, {
//                   inputRange: [0, 1],
//                   outputRange: [0.95, 0.6],
//                 }),
//               },
//               {
//                 scaleY: interpolateNode(progress, {
//                   inputRange: [0, 1],
//                   outputRange: [0.95, 0.6],
//                 }),
//               },
//             ],
//           },
//         ]}>
//           {/* {children} */}
//         </Animated.View>
//       <Animated.View
//         style={[
//           styles.firstScreen,
//           {
//             height: pageHeight,
//             shadowOpacity: interpolateNode(progress, {
//               inputRange: [0, 1],
//               outputRange: [0, 0.5],
//             }),
//             transform: [
//               {
//                 scaleX: interpolateNode(progress, {
//                   inputRange: [0, 1],
//                   outputRange: [1, 0.7],
//                 }),
//               },
//               {
//                 scaleY: interpolateNode(progress, {
//                   inputRange: [0, 1],
//                   outputRange: [1, 0.7],
//                 }),
//               },
//               {
//                 translateX: interpolateNode(progress, {
//                   inputRange: [0, 1],
//                   outputRange: [0, -40],
//                 }),
//               },
//             ],
//           },
//         ]}>
//         <Animated.View
//           style={[
//             styles.screenWrapper,
//             {
//               borderRadius: interpolateNode(progress, {
//                 inputRange: [0, 0.01, 1],
//                 outputRange: [0, 30, 30],
//               }),
//             },
//           ]}>
//           {children}
//         </Animated.View>
//       </Animated.View>
//     </View>
//   );
// };

// const useStyles = StyleSheet.create(({page, insets}) => ({
//   wrapper: {
//     flex: 1,
//     backgroundColor: "transparent",
//   },
//   secondScreen: {
//     backgroundColor: "#fff555",
//     opacity: 0.9,
//     shadowColor: "rgba(51,51,51,1.0)",
//     shadowOffset: {width: 0, height: 0},
//     shadowRadius: 5,
//     elevation: 1,
//     width: page.width,
//     borderRadius: 30,
//   },
//   firstScreen: {
//     shadowColor: "rgba(51,51,51,1.0)",
//     shadowOffset: {width: 0, height: 0},
//     shadowRadius: 10,
//     elevation: 3,
//   },
//   screenWrapper: {
//     flex: 1,
//     backgroundColor: "white",
//     overflow: "hidden",
//     paddingBottom: insets.bottom,
//   },
// }));

// export default DrawerWrapper;
