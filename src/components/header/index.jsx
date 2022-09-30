import React from "react";
import { 
  View, 
  TouchableOpacity, 
  Text, 
  Dimensions, 
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { makeStyles } from "components";
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  interpolate,
} from "react-native-reanimated";

const Header = ({
  leftIcon,
  leftIconColor,
  leftIconAction,
  rightIcon,
  rightIconColor,
  rightIconAction,
  label,
  badge,
  badgeAmount,
  labelPosition,
  borderBottom,
  search,
  setSearch,
  modal,
  logo,
}) => {
  const styles = useStyles();
  const width = Dimensions.get("window").width;

  const [searchOpen, setSearchOpen] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const searchProgress = useSharedValue(0);

  const toggleSearch = () => {
    setSearchOpen((open) => {
      searchProgress.value = withSpring(open ? 0 : 1, {
        stiffness: 500,
        damping: 50,
        mass: 5,
        overshootClamping: true,
      });
      if (!open) setShowSearch(true);
      else setTimeout(setShowSearch, 100, false);
      ReactNativeHapticFeedback.trigger("impactLight");
      return !open;
    });
  };

  const searchButtonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          searchProgress.value,
          [0, 1],
          [0, -width],
          "clamp",
        ),
      },
    ],
  }));

  const searchInputStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          searchProgress.value,
          [0, 1],
          [width, 0],
          "clamp",
        ),
      },
    ],
  }));

  const closeSearch = () => {
    setSearch(""),
    toggleSearch();
  };

  return (
    <>
      <View style={styles.container}>
        {badge ?
          <View style={styles.rightSide}>
            <Text style={styles.label}>{label}</Text>
              {/* <View style={styles.badge}>
                <Text style={styles.ammount}>{badgeAmount}</Text>
              </View> */}
          </View>
        :
          <>
            {label || logo ? 
              <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", flex:1}}>
                
                <View style={{ width:"10%", alignItems:"flex-end", justifyContent:"center"}}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={leftIconAction}>
                    <Icon name={leftIcon} size={24} color={leftIconColor} />
                  </TouchableOpacity>
                </View>
                
               
                {logo ?
                  <View 
                    style={{flex:1}}
                  >
                    <View 
                      style={styles.information2}

                    >
                      <Image source={require('../../assets/logo.png')} style={{width:50, height:30, opacity:0.7}}/>
                    </View>
                  </View>
                :
                  <>
                    {labelPosition ?
                      <View 
                        style={{flex:1}}
                      >
                        <View 
                          style={styles.information2}
                        >
                          <Text style={styles.label}>{label}</Text>
                        </View>
                      </View>
                      :
                      <Text style={styles.label}>{label}</Text>
                    }
                  </>
                }    
              </View>
            :
            
              <TouchableOpacity
                style={styles.button}
                onPress={leftIconAction}>
                <Icon name={leftIcon} size={24} color={leftIconColor} />
              </TouchableOpacity>

      
              
            } 
          </>
        }
        { searchOpen === false &&
          <Animated.View style={[styles.search, searchButtonStyle]}>
            <TouchableOpacity onPress={modal ? rightIconAction : toggleSearch}>
              <Icon name={rightIcon} size={24} color={rightIconColor} />
            </TouchableOpacity>
          </Animated.View>
        }

        {showSearch && (
          <View style={{flex:1, justifyContent:"center"}}>
            <Animated.View style={[styles.searchWrapper, searchInputStyle]}>
              <TextInput
                placeholderTextColor="#9d9b9b"
                keyboardAppearance="light"
                returnKeyType="done"
                autoCapitalize="none"
                autoFocus={true}
                value={search}
                onChangeText={setSearch}
                style={styles.input}
              />
            </Animated.View>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={closeSearch}>
              <Icon
                name="times"
                size={14}
                color={"#fff"}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {!borderBottom &&
        <View style={{height:0.3, width:"100%", backgroundColor:"#c5c5c5"}}/>
      }
    </>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flexDirection:"row", 
    justifyContent:"space-between",
    paddingVertical: 5,
    width:Dimensions.get("window").width,
  },
  // input: {
  //   paddingLeft: 10,
  //   color: "black",
  //   flex: 1,
  //   height: 40,
  //   backgroundColor: "#FFF",
  //   borderRadius:8,
  //   left:10
  // },
  // clearButton: {
  //   backgroundColor: "#e1e1e1",
  //   width: 20,
  //   height: 20,
  //   borderRadius: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginRight: 10,
  //   opacity: 0.7,
  //   position:"absolute",
  //   right:-5,
  // },
  button: { 
    flexDirection:"row", 
    alignItems:"center",
  },
  ammount: { 
    fontWeight:"700", 
    fontSize:16, 
    color: theme.palette.typograph.contrast,
  },
  rightSide: {
    flexDirection:"row", 
    alignItems:"center",
  },
  information2: {
    // width:327,
    justifyContent:"center",
    flexDirection:"row", 
    alignItems:"center",

  },
  badge: {
    height:25, 
    width:25, 
    borderRadius:15, 
    backgroundColor: theme.palette.badge.main, 
    left:10,
    alignItems:"center", 
    justifyContent:"center",
  },
  label: { 
    left:10, 
    fontWeight:"700", 
    fontSize:16,
    color: theme.palette.typograph.main,
    marginRight:5,
  },
  // searchWrapper: {
  //   position: "absolute",
  //   left: 70,
  //   right: 10,
  // },
  search: {
    justifyContent:"center",
    alignItems:"center",
    width:"10%"
  },
  logo: {
    height: 10,
    width: 30,
  }
}));

export default Header;