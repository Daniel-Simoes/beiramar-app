import React from "react";
import {
  View, 
  Animated, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ContextMenu = ({
  options, 
  position, 
  onSelect, 
  progress,
}) => {
  return (
    <Animated.View
      style={[
        styles(position).card,
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
                outputRange: [0.7, 1],
              }),
            },
          ],
        },
      ]}>
      {options.map((item, index) => (
        <TouchableOpacity
          style={{
            padding: 10,
            paddingRight: 14,
            flexDirection: "row",
            backgroundColor:"#FFF",
            alignItems: "center",
            borderRadius:12,
          }}
          key={String(index)}
          activeOpacity={0.7}
          onPress={() => onSelect(index)}>
            <View style={{
              flexDirection:"row",
              margin:5,
            }}>
            <Icon
            name={item.icon}
            size={22}
            color="#6c7174"
          />
          <Text
            style={{
              marginLeft: 5,
              paddingTop: 0.5,
              maxWidth: 150,
              fontWeight: "600",
              color:"#333"
            }}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {item.label}
          </Text>
            </View>
          
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
};

const styles = (position) => StyleSheet.create({
  card: {
    position: "absolute",
    backgroundColor: "transparent",
    height:90,
    borderRadius:12,
    ...position,
  },
  item: {
    padding: 10,
    paddingRight: 14,
    flexDirection: "row",
    backgroundColor:"red",
    alignItems: "center",
  },
  label: {
    marginLeft: 4,
    paddingTop: 0.5,
    maxWidth: 150,
    fontSize: 12,
    fontWeight: "600",
    color: "red",
  },
});

export default ContextMenu;