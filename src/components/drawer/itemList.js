import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import {useSafeArea} from "react-native-safe-area-context";
import Animated, {interpolateNode} from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const ItemList = (props) => {
  const {progress, items, navigation, about} = props;
  const insets = useSafeArea();
  const styles = useStyles();

  // const about = items.icon();

  const renderItem = ({item}) => {
    const action = () => {
      ReactNativeHapticFeedback.trigger("impactLight");
      switch (item.type) {
        case "external":
          Linking.openURL(item.route);
          setTimeout(() => {
            navigation.closeDrawer();
          }, 500);
          break;
        case "webview":
          navigation.navigate("WebView", {
            url: item.route,
            title: item.displayName,
          });
          setTimeout(() => {
            navigation.closeDrawer();
          }, 500);
          break;
        case "internal":
          navigation.navigate(item.route);
          setTimeout(() => {
            navigation.closeDrawer();
          }, 500);
          break;
        case "page":
          navigation.navigate("WebView", {
            page: item.route,
            title: item.displayName,
          });
          setTimeout(() => {
            navigation.closeDrawer();
          }, 500);
          break;
        case "menu":
          navigation.navigate("CustomMenu", {
            title: item.displayName,
            items: item.items,
          });
          setTimeout(() => {
            navigation.closeDrawer();
          }, 500);
          break;
        case "action":
          Linking.openURL(item.route);
          setTimeout(() => {
            navigation.closeDrawer();
          }, 500);
      }
    };

    return (
      <TouchableOpacity style={styles.item} onPress={action}>
        { item.icon === "BeiraMar" ?
           <Image
           style={{height:19, width:30,}}
           source={require('../../assets/logoWhite.png')} 
         />
         :
         <Icon name={item.icon} color="white" size={25} />
                
  }
        <Text
          style={styles.itemLabel}
          allowFontScaling={false}
          numberOfLines={1}
          ellipsizeMode="tail">
          {item.displayName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          marginTop: insets.top + 130,
          height:
            Dimensions.get("window").height - insets.top - insets.bottom - 230,
          opacity: interpolateNode(progress, {
            inputRange: [0.5, 0.7, 1],
            outputRange: [0, 0.1, 1],
          }),
          transform: [
            {
              translateX: interpolateNode(progress, {
                inputRange: [0, 0.01, 1],
                outputRange: [0, Dimensions.get("window").width * 0.45, 0],
              }),
            },
          ],
        },
      ]}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </Animated.View>
  );
};

const useStyles = StyleSheet.create((theme) => ({
  wrapper: {
    marginLeft: 30,
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  itemLabel: {
    color: "#f9f9f9",
    marginLeft: 10,
    paddingTop: 3,
  },
}));

export default ItemList;
