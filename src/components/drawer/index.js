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
