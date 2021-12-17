import {useRef, useEffect} from "react";
import {Keyboard} from "react-native";
import {useContextMenuContext} from "./context";
import {useDialogContext} from "./context";
import {useLowerThirdContext} from "./context";

const DEFAULT_OPTIONS = {
  type: "alert",
  title: "",
  description: "",
  submitLabel: "OK",
  cancelLabel: "Cancel",
  placeholder: "",
};

export const useContextMenu = (options, onPress) => {
  const contextId = useRef(new Date().toISOString());

  const [
    contextMenu,
    setContextMenu,
    resetContextMenu,
  ] = useContextMenuContext();

  const openContextMenu = (position) => {
    if (contextMenu.contextId) return;
    Keyboard.dismiss();
    setContextMenu({
      contextId,
      position,
      options,
      selectedOption: null,
    });
  };

  useEffect(() => {
    if (contextMenu.contextId !== contextId) return;
    if (!contextMenu.selectedOption && contextMenu.selectedOption !== 0) return;
    onPress(contextMenu.selectedOption);
    resetContextMenu();
  }, [contextMenu.contextId, contextMenu.selectedOption]);

  return [openContextMenu, contextId];
};


export const useDialog = (options, onSubmit) => {
  const contextId = useRef(new Date().toISOString());

  const [dialog, setDialog, resetDialog] = useDialogContext();

  const openDialog = (value = "", props) => {
    setDialog((dialog) => {
      if (dialog.contextId) return dialog;
      let opt;
      if (typeof options === "function") {
        opt = {
          ...DEFAULT_OPTIONS,
          ...options(props),
        };
      } else {
        opt = {
          ...DEFAULT_OPTIONS,
          ...options,
        };
      }
      if (opt.type !== "prompt") Keyboard.dismiss();

      return {
        contextId,
        type: opt.type,
        title: opt.title,
        description: opt.description,
        submitLabel: opt.submitLabel,
        cancelLabel: opt.cancelLabel,
        value,
        placeholder: opt.placeholder,
        result: null,
        props,
      };
    });
  };

  useEffect(() => {
    if (dialog.contextId !== contextId) return;
    if (dialog.result === null) return;
    onSubmit(dialog.result, dialog.props);
    resetDialog();
  }, [dialog.contextId, dialog.result]);

  return [openDialog, contextId];
};

export const useLowerThird = (options, onPress) => {
  const contextId = useRef(new Date().toISOString());

  const [lowerThird, setLowerThird, resetLowerThird] = useLowerThirdContext();

  const openLowerThird = () => {
    if (lowerThird.contextId) return;
    Keyboard.dismiss();
    setLowerThird({
      contextId: contextId.current,
      options,
      selectedOption: null,
    });
  };

  useEffect(() => {
    if (lowerThird.contextId !== contextId.current) return;
    if (!lowerThird.selectedOption && lowerThird.selectedOption !== 0) return;
    onPress(lowerThird.selectedOption);
    resetLowerThird();
  }, [lowerThird.contextId, lowerThird.selectedOption]);

  return [openLowerThird, resetLowerThird, contextId.current];
};