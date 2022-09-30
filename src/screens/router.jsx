import React from "react";
import {Animated, StatusBar} from "react-native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import {useIsDrawerOpen} from "@react-navigation/drawer";
import {createDrawerNavigator} from "components/drawer";
import {useTheme, DrawerHeader, DrawerFooter} from "components";


import { 
  Home, 
  Notification,
  Chat,
  Profile,
  ServiceSaved,
  ServiceDetails,
  PhotoView,
  Provider,
  EditProfile,
  Appointment,
  Successfully,
  Login,
  Gatway,
  Coupon,
  TripProviders,
  Rating,
  ChatDetail,
} from "../screens/index";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {

  const isDrawerOpen = useIsDrawerOpen();

  const theme = useTheme();
  
  return (
<>
    {isDrawerOpen ? (
      <StatusBar barStyle="light-content" animated />
    ) : (
      <StatusBar barStyle="dark-content" animated />
    )}
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={26} color={focused ? theme. palette.icon.contrast : "#d8dae2"} />
          ),
          tabBarLabel: () => false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="bell" size={26} color={focused ? theme. palette.icon.contrast : "#d8dae2"} />
          ),
          tabBarLabel: () => false,
        }}
      />
      <Tab.Screen
        name="ServiceSaved"
        component={ServiceSaved}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="bookmark" size={26} color={focused ? theme. palette.icon.contrast : "#d8dae2"} />
          ),
          tabBarLabel: () => false,
        }}
      />
      {/* <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="comments" size={26} color={focused ? theme. palette.icon.contrast : "#d8dae2"} />
          ),
          tabBarLabel: () => false,
        }}
      /> */}
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="search" size={26} color={focused ? theme. palette.icon.contrast : "#d8dae2"} />
          ),
          tabBarLabel: () => false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="user" size={26} color={focused ? theme. palette.icon.contrast : "#d8dae2"} />
          ),
          tabBarLabel: () => false,
        }}
      />
    </Tab.Navigator>
    </>
  );
};

const Drawer = createDrawerNavigator();

const DrawerScreen = (props) => {

  return (
    
    <Drawer.Navigator 
    items={[
      {
        id: "switchAccount",
        type: "internal",
        route: "ChangeAccount",
        displayName: "Configurações",
        icon: "sliders-h",
      },
      {
        id: "addDevice",
        type: "internal",
        route: "AddDevice",
        displayName: "Suporte",
        icon: "headset",
      },
      {
        id: "theftRecovery",
        type: "internal",
        route: "TheftRecovery",
        displayName: "Previsāo do Clima",
        icon: "cloud-sun-rain",
      },
      {
        id: "theftRecovery",
        type: "internal",
        route: "TheftRecovery",
        displayName: "Sobre BeiraMar",
        icon: "BeiraMar",
      },
    ]}
      header={DrawerHeader}
      footer={DrawerFooter}>
      <Drawer.Screen name="Tabs" component={TabNavigation} />
      {/* <Drawer.Screen name="Tabs" component={ModalNavigator} /> */}
    </Drawer.Navigator>
    
  );
};




const ModalStack = createStackNavigator();
const ModalNavigator = (props) => {
  return (
    <>
      <StatusBar barStyle="light-content" animated={true} />

    <ModalStack.Navigator
    screenOptions={{
      headerShown: false,
      cardOverlayEnabled: true,
      ...(Platform.OS === "ios"
        ? TransitionPresets.ModalPresentationIOS
        : TransitionPresets.ModalTransition),
      cardOverlay: ({style}) => {
        return (
          <Animated.View
            style={[style, {flex: 1, backgroundColor: "rgba(0,0,0,0.5)"}]}
          />
        );
      },
      cardStyle: {
        backgroundColor: "transparent",
      },
    }}
    mode="modal">
        <ModalStack.Screen name="Drawer" component={DrawerScreen} />
          <ModalStack.Screen name="EditProfile" component={EditProfile} />
      </ModalStack.Navigator>
          
    </>
  );
};


const Stack = createStackNavigator();
const StackNavigation = (props) => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      cardStyleInterpolator: ({current, closing}) => ({
        cardStyle: {
          opacity: current.progress,
        },
      }),
    }}
      mode="card"
      options={{
        gestureEnabled: false,
      }}
      initialRouteName={"Login"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" options={{gestureEnabled: false}} component={ModalNavigator} />
      <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
      <Stack.Screen name="PhotoView" component={PhotoView} />
      <Stack.Screen name="Provider" component={Provider} />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="Successfully" component={Successfully} />
      <Stack.Screen name="Gatway" component={Gatway} />
      <Stack.Screen name="Coupon" component={Coupon} />
      <Stack.Screen name="TripProviders" component={TripProviders} />
      <Stack.Screen name="Rating" component={Rating} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigation;