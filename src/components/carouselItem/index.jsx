import React from "react";
import {Animated, useWindowDimensions, Image} from "react-native";
import {PinchGestureHandler, State} from "react-native-gesture-handler";
import {makeStyles} from "components";

const CarouselItem = ({image, currntIndex, activeIndex}) => {
 
  const [aspectRatio, setAspectRatio] = React.useState(-1);
  const [helper, setHelper] = React.useState(true);

  React.useEffect(() => {
    Image.getSize(image, (width, height) => {
      setAspectRatio(width / height);
    });
  }, []);

  React.useEffect(() => {
    setHelper(true);
  }, []);

  const {width} = useWindowDimensions();
  const styles = useStyles({width, aspectRatio});
  const [scale] = React.useState(new Animated.Value(1));

  const onPinchEvent = Animated.event([{nativeEvent: {scale: scale}}], {
    useNativeDriver: true,
  });

  const onPinchStateChange = ({nativeEvent}) => {

    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }

  const onImageLoad = () => {
    helper && setHelper(false);
  };

  return (
    <PinchGestureHandler onGestureEvent={onPinchEvent} onHandlerStateChange={onPinchStateChange}>
      <Animated.View style={styles.wrapper}>
        {helper && (
          <Animated.Image
            source={{uri: image}}
            style={[styles.image, {transform: [{scale}]}]}
          />
        )}
        {currntIndex === activeIndex && (
          <Animated.Image
            source={{uri: image}}
            style={[styles.image, {transform: [{scale}], opacity: 1}]}
            onLoadEnd={onImageLoad}
          />
        )}
      </Animated.View>
    </PinchGestureHandler>
  );
};

const useStyles = makeStyles((theme, props) => ({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: props.width,
    aspectRatio: props.aspectRatio,
  },
}));

export default CarouselItem;
