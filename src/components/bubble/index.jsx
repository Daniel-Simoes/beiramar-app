import React from "react";
import {View} from "react-native";
import { makeStyles, useTheme } from "components";
import {Svg, Path} from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";

const Card = ({children, position = "left", icon, iconStyle, iconColor}) => {
  const theme = useTheme();
  const styles = useStyles({position});

  return (
    <View style={styles.wrapper}>
      {icon && position === "right" && (
        <Icon name={icon} style={iconStyle} size={20} color={iconColor} />
      )}
      <Svg width={15} height={100} viewBox="0 0 13 9" style={styles.arrow}>
        <Path
          d={
            position === "right"
              ? "M3.78709543,0.0285497999 C4.4818876,0.0285497999 5.13667877,-0.0356872499 5.78709543,0.0285497999 C5.77228256,0.161310405 5.78709543,0.393432838 5.78709543,0.5285498 C5.78709543,3.11916686 10.3875954,4.61760417 12.0906323,5.0285498 C12.9418609,5.23395269 12.2118757,6.31206022 10.6477266,6.94160081 C8.80216857,7.68440326 5.6966319,8.0285497 3.78709543,8.0285497 C-1.26236514,8.0285497 -1.26236514,0.0285497999 3.78709543,0.0285497999 Z"
              : "M8.66339043,0.0285497999 L8.25103023,0.0223830431 L8.25103023,0.0223830431 L7.44827027,0.000799394398 C7.18442367,-0.00228398399 6.92355709,0.00285497999 6.66339043,0.0285497999 L6.6696396,0.143682358 L6.6696396,0.143682358 L6.66339043,0.5285498 L6.66339043,0.5285498 C6.66339043,2.23290313 4.6721768,3.46453323 2.82482158,4.22477504 L2.38531156,4.39818311 C2.31288463,4.42557623 2.24096115,4.45221531 2.16967779,4.47810043 L1.75075203,4.62436422 L1.75075203,4.62436422 L1.35374779,4.75253695 L1.35374779,4.75253695 L0.985224006,4.86262272 L0.985224006,4.86262272 L0.65173962,4.95462564 L0.65173962,4.95462564 L0.359853574,5.0285498 L0.359853574,5.0285498 C-0.491375086,5.23395269 0.23861018,6.31206022 1.8027592,6.94160081 C3.64831728,7.68440326 6.75385395,8.0285497 8.66339043,8.0285497 C13.712851,8.0285497 13.712851,0.0285497999 8.66339043,0.0285497999 Z"
          }
          fill={position === "right" ? "#c6d8f5" : "white"}
          fillRule="evenodd"
        />
      </Svg>

      <View style={styles.card}>
        <View style={styles.container}>{children}</View>
        <View style={styles.shadow} />
      </View>
      {icon && position === "left" && (
        <Icon name={icon} style={iconStyle} size={20} color={iconColor} />
      )}
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  wrapper: {
    flexDirection: "row",
    justifyContent: props.position === "right" ? "flex-end" : "flex-start",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  arrow: {
    position: "absolute",
    bottom: 8,
    left: props.position === "right" ? undefined : 7,
    right: props.position === "right" ? 7 : undefined,
  },
  arrowShadow: {
    position: "absolute",
    bottom: 7.5,
    left: props.position === "right" ? undefined : 7,
    right: props.position === "right" ? 7 : undefined,
    zIndex: -2,
  },
  card: {
    minWidth: 50,
    maxWidth: "70%",
    margin: 5,
  },
  shadow: {
    backgroundColor: "rgba(160,160,160,0.3)",
    height: 20,
    borderRadius: 8,
    transform: [{translateY: -19.5}],
    marginBottom: -20,
    marginLeft: props.position === "right" ? undefined : 0.5,
    marginRight: props.position === "right" ? 0.5 : undefined,
    zIndex: -1,
  },
  container: {
    alignItems: props.position === "right" ? "flex-end" : "flex-start",
    justifyContent: "flex-start",
    padding: 5,
    borderRadius: 8,
    backgroundColor:
      props.position === "right" ? "#c6d8f5" : "white",
  },
}));

export default Card;
