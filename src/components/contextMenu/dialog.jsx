import React from "react";
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
  KeyboardAvoidingView,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import InputField from "../inputField";
import Button from "../button";

const Dialog = ({
  type,
  title,
  description,
  submitLabel,
  cancelLabel,
  placeholder,
  initialValue,
  onSubmit,
  onCancel,
  progress,
}) => {
  const {height} = useWindowDimensions();

  const [value, setValue] = React.useState(initialValue);
  const submitDisabled = type === "prompt" && !value.trim();
  
  const handleCancel = () => {
    if (type === "confirm") onSubmit(false);
    else onCancel();
  };
  const handleSubmit = () => {
    if (submitDisabled) return;
    onSubmit(type !== "prompt" ? true : value);
  };

  const renderSeenByItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <Text
          style={{marginVertical: 2, fontWeight: "400", alignSelf: "center"}}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : undefined}
      style={{maxHeight: "90%", justifyContent: "center"}}>
      <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
        <Animated.View
          style={[
            styles.card,
            {
              opacity: progress.interpolate({
                inputRange: [0, 0.3, 1],
                outputRange: [0, 1, 1],
                extrapolate: "clamp",
              }),
              transform: [
                {
                  scale: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.9, 1],
                  }),
                },
              ],
            },
          ]}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </View>
          {!!description && (
            <Text multiline style={styles.description}>
              {description}
            </Text>
          )}
          {type === "list" && (
            <FlatList
              data={value}
              renderItem={renderSeenByItem}
              scrollEnabled={true}
              style={{maxHeight: height - 200}}
              contentContainerStyle={{justifyContent: "center"}}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
          {type === "prompt" && (
            <InputField
              value={value}
              onChangeText={setValue}
              placeholder={placeholder}
              style={{maxHeight: 100}}
              multiline
              scrollEnabled={true}
              autoFocus
            />
          )}
          <View style={styles.buttonWrapper}>
            {type !== "alert" && type !== "list" && (
              <Button
                containerStyle={{maxWidth: "40%"}}
                onPress={handleCancel}
                label={cancelLabel}
              />
            )}
            <Button
              primary
              containerStyle={{maxWidth: "40%"}}
              onPress={handleSubmit}
              label={submitLabel}
              disabled={submitDisabled}
            />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 12,
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  titleWrapper: {
    height: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    marginVertical: 5,
    textAlign: "center",
    color: "#666",
  },
  input: {
    backgroundColor: "#f2f6f9",
    marginVertical: 5,
    marginHorizontal: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderBottomWidth: 2,
    borderColor: "red",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Dialog;
