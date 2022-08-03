import React from "react";
import {StyleSheet} from "react-native";
import {
  useNavigationBuilder,
  createNavigatorFactory,
  DrawerRouter,
} from "@react-navigation/native";
import {DrawerView} from "@react-navigation/drawer";
import {Screen} from "react-native-screens";
import Wrapper from "./wrapper";
import Drawer from "./drawer";

const DrawerNavigator = ({ children, content }) => {
  const {
    state, 
    descriptors, 
    navigation,
  } = useNavigationBuilder(DrawerRouter,{children});

  const [progress, setProgress] = React.useState(0);

  const newDescriptors = {};
  for (let activeKey in descriptors) {
    newDescriptors[activeKey] = {
      ...descriptors[activeKey],
      render: () => {
        return (
          <Screen key={activeKey} active={true} style={StyleSheet.absoluteFill}>
            <Wrapper progress={progress}>
              {descriptors[activeKey].render()}
            </Wrapper>
          </Screen>
        );
      },
    };
  }

  return (
    <DrawerView
      state={state}
      navigation={navigation}
      descriptors={newDescriptors}
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{width: "65%"}}
      drawerContent={props => (
        <Drawer
          {...props}
          onProgressChange={setProgress}
          content={content}
        />
      )}
    />
  );
};

export const createDrawerNavigator = createNavigatorFactory(DrawerNavigator);


// import React from "react";
// import {StyleSheet, View} from "react-native";
// import {
//   useNavigationBuilder,
//   createNavigatorFactory,
//   DrawerRouter,
// } from "@react-navigation/native";
// import {DrawerView} from "@react-navigation/drawer";
// import {Screen} from "react-native-screens";
// import Wrapper from "./wrapper";
// import Drawer from "./drawer";

// const DrawerNavigator = ({
//   initialRouteName,
//   backBehavior,
//   children,
//   screenOptions,
//   header = View,
//   footer = View,
//   items,
// }) => {
//   const {state, descriptors, navigation} = useNavigationBuilder(DrawerRouter, {
//     initialRouteName,
//     backBehavior,
//     children,
//     screenOptions,
//     drawerType: "slide",
//     overlayColor: "transparent",
//   });

//   const [progress, setProgress] = React.useState(0);

//   const newDescriptors = {};
//   for (let activeKey in descriptors) {
//     newDescriptors[activeKey] = {
//       ...descriptors[activeKey],
//       render: () => {
//         return (
//           <Screen key={activeKey} active={true} style={StyleSheet.absoluteFill}>
//             <Wrapper progress={progress}>
//               {descriptors[activeKey].render()}
//             </Wrapper>
//           </Screen>
//         );
//       },
//     };
//   }

//   return (
//     <DrawerView
//       state={state}
//       navigation={navigation}
//       descriptors={newDescriptors}
//       drawerType="slide"
//       overlayColor="transparent"
//       drawerStyle={{
//         width: "65%",
//         backgroundColor: "transparent",
//       }}
//       sceneContainerStyle={{
//         backgroundColor: "transparent",
//       }}
//       drawerContent={props => (
//         <Drawer
//           {...props}
//           onProgressChange={setProgress}
//           items={items}
//           header={header}
//           footer={footer}
//         />
//       )}
//     />
//   );
// };

// export const createDrawerNavigator = createNavigatorFactory(DrawerNavigator);
