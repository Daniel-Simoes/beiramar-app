import React from "react";
import {
  ActivityIndicator,
  Image,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import {BackButton } from "components";
import { makeStyles, useTheme, CarouselItem } from "components";
import Carousel from "react-native-snap-carousel";
import {useNavigation, useRoute} from "@react-navigation/native";
import HapticFeedback from "react-native-haptic-feedback";

const Slide = () => {
  const styles = useStyles();
  const theme = useTheme();
  
  const navigation = useNavigation();
  const route = useRoute();
  const { 
    photoId,
    photos,
  } = route.params;

  const firstItem = photos.findIndex(
    (photo) => photo.id === photoId,
  );

  const {height, width} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = React.useState(firstItem);


  const hapticFeedback = (index) => {
    if (index !== activeIndex) HapticFeedback.trigger("impactLight");
  };

  const renderItem = ({item}) => {
    return (
      <CarouselItem image={item.url} />
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        },
      ]}
    >
      <StatusBar barStyle="light-content" backgroundColor={theme.palette.primary.main}/>
      <BackButton 
          navigation={navigation}
          rightSide={true}
          iconName={"arrow-left"}
          iconColor={theme.palette.icon.main}
        />
      <ActivityIndicator color={"white"} style={styles.loader} />
        <Carousel
          style={styles.carousel}
          data={photos}
          renderItem={renderItem}
          firstItem={activeIndex}
          sliderWidth={width}
          itemWidth={width}
          onBeforeSnapToItem={hapticFeedback}
          onSnapToItem={(index) => {
            setActiveIndex(index);
          }}
        />
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    backgroundColor:theme.palette.secondary.main,
  },
  content: {
    flex: 1,
  },
  loader: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 10,
    left: Dimensions.get("window").width / 2 - 10,
  },
  carousel: {
    flex: 1,
  },
}));

export default Slide;
