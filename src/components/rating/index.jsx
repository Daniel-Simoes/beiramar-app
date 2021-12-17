import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const Rating = ({rating}) => {

  const styles = useStyles();
  const theme = useTheme();

  const [firstStar, setFirstStar] = React.useState(false);
  const [secondStar, setSecondStar] = React.useState(false);
  const [thirdStar, setThirdStar] = React.useState(false);
  const [fourthStar, setFourthStar] = React.useState(false);
  const [fifthStar, setFifthStar] = React.useState(false);

  const handleFeedbackOneStar = () => {
    setFirstStar(true);
  };
 
  const handleFeedbackTwoStar = () => {
    setFirstStar(true);
    setSecondStar(true);
  };

  const handleFeedbackThreeStar = () => {
    setFirstStar(true);
    setSecondStar(true);
    setThirdStar(true);
  };

  const handleFeedbackFourStar = () => {
    setFirstStar(true);
    setSecondStar(true);
    setThirdStar(true);
    setFourthStar(true);
  };

  const handleFeedbackFiveStar = () => {
    setFirstStar(true);
    setSecondStar(true);
    setThirdStar(true);
    setFourthStar(true);
    setFifthStar(true);
  };

  return (
    <>
      { rating === 5 ? 
        (
          <View style={styles.rating}>
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
          </View>
        ) : rating === 4 ? 
        (
          <View style={styles.rating}>
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
          </View>
        ) : rating === 3 ? 
        (
          <View style={styles.rating}>
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
          </View>
        ) : rating === 2 ? 
        (
          <View style={styles.rating}>
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
          </View>
        ) : rating === 1 ?
        (
          <View style={styles.rating}>
            <Icon name="star" size={18} color={theme.palette.icon.activeStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
            <Icon name="star" size={18} color={theme.palette.icon.disabledStar} />
          </View>
        ) :
        (
          <View style={styles.rating}>
            <TouchableOpacity onPress={handleFeedbackOneStar}>
              <Icon name="star" size={40} color={firstStar === true ? theme.palette.icon.activeStar : theme.palette.icon.disabledStar} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFeedbackTwoStar}>
              <Icon name="star" size={40} color={secondStar === true ? theme.palette.icon.activeStar : theme.palette.icon.disabledStar} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFeedbackThreeStar}>
              <Icon name="star" size={40} color={thirdStar === true ? theme.palette.icon.activeStar : theme.palette.icon.disabledStar} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFeedbackFourStar}>
              <Icon name="star" size={40} color={fourthStar === true ? theme.palette.icon.activeStar : theme.palette.icon.disabledStar} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFeedbackFiveStar}>
              <Icon name="star" size={40} color={fifthStar === true ? theme.palette.icon.activeStar : theme.palette.icon.disabledStar} />
            </TouchableOpacity>
          </View>
        )
      }
    </>
  );
};

const useStyles = makeStyles((theme, props) => ({
  rating: {
    flexDirection:"row",
  },
}));


export default Rating;