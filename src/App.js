import * as React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import { Router } from "screens";
import {SafeAreaProvider} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {ContextMenuProvider, ThemeProvider} from "components";
import reduxStore from "./redux/store";
const {store, persistor} = reduxStore();

const theme = {
  palette: {
    primary: {
      main: "#f2f3f9",
      contrast: "#fff"
    },
    secondary: {
      main: "#000000",
      contrast: "#FFFFFF",
      test: "#323739",
      overlay: "#000000",
    },
    typograph: {
      main: "#333",
      contrast: "#ffffff",
      secondary:"#c5c5c5"
    },
    icon: {
      main: "#c6c8d1",
      contrast: "#262d31",
      like:"#C75959",
      comment:"#2F80ED",
      save:"#6C6C6C",
      activeStar:"#E67100",
      disabledStar:"#6C6C6C",
      check: "green",
      locked: "#333",
      secondary:"#fff"
    },
    badge: {
      main: "#2F80ED",
      contrast: "#333"
    },
    hastag: {
      main: "#2F80ED",
      contrast: "#333"
    },
    button: {
      main: "#2F80ED",
      contrast: "#333"
    },
    border: {
      main: "#333",
      contrast: "#FFF"
    },
    shadow: {
      main: "#333",
      contrast: "#FFF"
    },
    checkBox: {
      tintColor: "#e5e5e5",
      onCheckColor: "#FFF",
      onFillColor: "#2F80ED",
      onTintColor: "#2F80ED",
    },
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <SafeAreaProvider>
              <ContextMenuProvider>
                <Router />
              </ContextMenuProvider>
            </SafeAreaProvider> 
          </ThemeProvider>
        </NavigationContainer>
       </PersistGate>
     </Provider>
  );
}