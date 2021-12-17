import React from "react";
import {
  StatusBar,
  View,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler,
  Platform,
} from "react-native";
import HapticFeedback from "react-native-haptic-feedback";
import {useSafeAreaFrame, SafeAreaProvider} from "react-native-safe-area-context";
import ContextMenu from "./contextMenu";
import Dialog from "./dialog";
import LowerThird from "./lowerThird";

const contextMenuInitialState = {
  contextId: null,
  position: {},
  options: [],
  selectedOption: null,
};

const dialogInitialState = {
  contextId: null,
  title: "",
  description: "",
  type: "alert",
  submitLabel: "OK",
  cancelLabel: "Cancel",
  placeholder: "",
  value: "",
  result: null,
};

const lowerThirdInitialState = {
  contextId: null,
  options: [],
  selectedOption: null,
};

const ContextMenuContext = React.createContext();
const DialogContext = React.createContext();
const LowerThirdContext = React.createContext();

export const useContextMenuContext = () => React.useContext(ContextMenuContext);
export const useDialogContext = () => React.useContext(DialogContext);
export const useLowerThirdContext = () => React.useContext(LowerThirdContext);


export const ContextMenuProvider = ({children}) => {

  const frame = useSafeAreaFrame();

  // CONTEXT_MENU
  const [contextMenu, setContextMenu] = React.useState(contextMenuInitialState);
  const resetContextMenu = () => setContextMenu(contextMenuInitialState);
  
  const menuOpenContextMenu = contextMenu.contextId && !contextMenu.selectedOption;
 
  const selectContextMenu = (selectedOption) => {
    setContextMenu({
      ...contextMenu,
      selectedOption,
    });
  };

  // DIALOG
  const [dialog, setDialog] = React.useState(dialogInitialState);
  const resetDialog = () => setDialog({...dialog, contextId: null, result: null});
  const menuOpenDialog = dialog.contextId && dialog.result === null;
  const submitDialog = (result) => {
    setDialog({
      ...dialog,
      result,
    });
  };

  // LOWER_THIRD
  const [lowerThird, setLowerThird] = React.useState(lowerThirdInitialState);  

  const resetLowerThird = (contextId) =>
    setLowerThird((lowerThird) =>
      !contextId || lowerThird.contextId === contextId ? lowerThirdInitialState : lowerThird,
    );
  const menuOpenLowerThird = lowerThird.contextId && !lowerThird.selectedOption;
  const selectLowerThird = (selectedOption) => {
    setLowerThird({
      ...lowerThird,
      selectedOption,
    });
  };

  //  Start function to reset all dialogs
  const resetAllDialogs = () => {
    resetContextMenu();
    resetDialog();
    resetLowerThird();
  };
  //  End function to reset all dialogs

  React.useEffect(() => {
    if (Platform.OS !== "android") return;
    const handleBackButton = () => {
      resetContextMenu();
      resetDialog();
      resetLowerThird(-1);
      return true;
    };
    if (menuOpenContextMenu  || menuOpenDialog || menuOpenLowerThird)
      BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    else BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [menuOpenContextMenu , menuOpenDialog, menuOpenLowerThird]);

  const [frameHeight, setFrameHeight] = React.useState(0);
  const [contextProgress] = React.useState(new Animated.Value(0));
  const [menuProgress] = React.useState(new Animated.Value(0));
  const [showMenu, setShowMenu] = React.useState(false);
  const [showContextMenu, setShowContextMenu] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [showLowerThird, setShowLowerThird] = React.useState(false);
  React.useEffect(() => {
    setFrameHeight(frame.height);
    Animated.spring(contextProgress, {
      toValue: menuOpenContextMenu  || menuOpenDialog || menuOpenLowerThird ? 1 : 0,
      friction: 40,
      tension: 500,
      useNativeDriver: true,
    }).start();
    Animated.spring(menuProgress, {
      toValue: menuOpenContextMenu  || menuOpenDialog || menuOpenLowerThird ? 1 : 0,
      friction: 10,
      tension: 150,
      useNativeDriver: true,
    }).start();

    if(menuOpenContextMenu) setShowContextMenu(true);
    if(menuOpenDialog) setShowDialog(true);
    if(menuOpenLowerThird) setShowLowerThird(true);

    if (menuOpenContextMenu  || menuOpenDialog || menuOpenLowerThird) setShowMenu(true);
    else setTimeout(setShowMenu, 100, false);
    if (menuOpenContextMenu  || menuOpenDialog || menuOpenLowerThird) HapticFeedback.trigger("impactMedium");
    else Keyboard.dismiss();
  }, [menuOpenContextMenu, menuOpenDialog, menuOpenLowerThird]);

  return (
    <SafeAreaProvider>
      <ContextMenuContext.Provider value={[contextMenu, setContextMenu, resetContextMenu]}>
        <DialogContext.Provider value={[dialog, setDialog, resetDialog]}>
          <LowerThirdContext.Provider value={[lowerThird, setLowerThird, resetLowerThird]}>
            <View style={{flex: 1, backgroundColor:"#111"}}>
              <Animated.View
                style={{
                  flex: showMenu ? 0 : 1,
                  height: showMenu ? frameHeight : undefined,
                  overflow: "hidden",
                  borderRadius: contextProgress.interpolate({
                    inputRange: [0, 0.1, 1],
                    outputRange: [0, 30, 30],
                    extrapolate: "clamp",
                  }),
                  transform: [
                    {
                      scale: contextProgress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.91],
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                }}>
                {children}
              </Animated.View>
              {showMenu && (
                <>
                  <TouchableWithoutFeedback onPress={resetAllDialogs}>
                    <Animated.View
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "black",
                        opacity: contextProgress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 0.3],
                        }),
                      }}>
                      {menuOpenContextMenu || menuOpenDialog  || menuOpenLowerThird && <StatusBar barStyle="light-content" animated />}
                    </Animated.View>
                  </TouchableWithoutFeedback>
                  { showContextMenu && (
                    <ContextMenu
                    position={contextMenu.position}
                    options={contextMenu.options}
                    onSelect={selectContextMenu}
                    progress={menuProgress}
                  />
                  )}
                  {showDialog && (
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        justifyContent: "center",
                      }}>
                      <Dialog
                        type={dialog.type}
                        title={dialog.title}
                        description={dialog.description}
                        submitLabel={dialog.submitLabel}
                        cancelLabel={dialog.cancelLabel}
                        placeholder={dialog.placeholder}
                        initialValue={dialog.value}
                        onSubmit={submitDialog}
                        onCancel={resetDialog}
                        progress={menuProgress}
                      />
                    </View>
                  )}
                  {showLowerThird && (
                    <LowerThird
                      options={lowerThird.options}
                      onSelect={selectLowerThird}
                      onClose={resetLowerThird}
                      progress={menuProgress}
                    />
                  )}
                </>
              )}
            </View>
          </LowerThirdContext.Provider>
        </DialogContext.Provider>
      </ContextMenuContext.Provider>
    </SafeAreaProvider>
  );
};
