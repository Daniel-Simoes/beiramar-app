import React from "react";
import {
  View, 
  Animated, 
  Easing, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {PanGestureHandler, State} from "react-native-gesture-handler";
import HapticFeedback from "react-native-haptic-feedback";

const LowerThird = ({options, onSelect, onClose, progress}) => {
  const insets = useSafeAreaInsets();
  // const styles = useStyles({insets});

  const [deltaY] = React.useState(new Animated.Value(0));

  const gestureEvent = Animated.event([{nativeEvent: {translationY: deltaY}}], {
    useNativeDriver: true,
    listener: ({nativeEvent}) => {
      if (nativeEvent.translationY > 100) {
        HapticFeedback.trigger("impactLight");
        onSelect(-1);
      }
    },
  });
  const onHandlerStateChanged = ({nativeEvent}) => {
    if (nativeEvent.oldState !== State.ACTIVE) return;
    if (nativeEvent.translationY > 20) {
      onSelect(-1);
      return;
    }
    Animated.timing(deltaY, {
      toValue: 0,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  return (
    <PanGestureHandler
      onGestureEvent={gestureEvent}
      onHandlerStateChange={onHandlerStateChanged}>
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
                translateY: Animated.add(
                  deltaY.interpolate({
                    inputRange: [0, 20, 30, 100],
                    outputRange: [0, 20, 25, 50],
                    extrapolate: "clamp",
                  }),
                  progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                  }),
                ),
              },
              {
                scale: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, 1],
                }),
              },
            ],
          },
        ]}>
        {options.map((item, index) => (
          <TouchableOpacity
            style={styles.item}
            key={String(index)}
            activeOpacity={0.7}
            onPress={() => onSelect(index)}>
            <Icon
              name={item.icon}
              size={40}
              color={"red"}
            />
            <View style={styles.labelWrapper}>
              <Text style={styles.label} numberOfLines={2}>
                {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </PanGestureHandler>
  );
};
const styles = StyleSheet.create({

  card: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 10,
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    width: "33.33%",
  },
  labelWrapper: {
    height: 32,
    justifyContent: "center",
  },
  label: {
    paddingTop: 1.5,
    maxWidth: 150,
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default LowerThird;
