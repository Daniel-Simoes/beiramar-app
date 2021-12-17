import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { makeStyles, useTheme } from "components";

const ProfileOptions = ({
  handleStatisticsChoice,
  handlePaymentChoice,
  handleStatusCarChoice,
  handleRatingChoice,
  statisticsBackgroundColor,
  paymentBackgroundColor,
  statusCarBackgroundColor,
  ratingBackgroundColor,
  statisticsIconColor,
  paymentIconColor,
  statusCarIconColor,  
  ratingIconColor,
  provider,
}) => {
  const styles = useStyles({
    statisticsBackgroundColor,
    paymentBackgroundColor,
    statusCarBackgroundColor,
    ratingBackgroundColor,
    provider,
  });
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleStatisticsChoice} style={styles.content}>
        <Icon name="line-chart" size={22} color={statisticsIconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePaymentChoice} style={styles.payment}>
        <Icon name="credit-card" size={26} color={paymentIconColor} />
      </TouchableOpacity>
      { provider &&
        <TouchableOpacity onPress={handleStatusCarChoice} style={styles.statusCar}>
          <Icon name="car" size={26} color={statusCarIconColor} />
        </TouchableOpacity>
      }
      
      <TouchableOpacity onPress={handleRatingChoice}style={styles.rating}>
        <Icon name="star" size={26} color={ratingIconColor} />
      </TouchableOpacity>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flexDirection:"row", 
    justifyContent:"space-between", 
    paddingHorizontal: props.provider ? 30 : 60, 
    marginTop:20,
  },
  content: { 
    height:60, 
    width:60, 
    borderRadius:30, 
    backgroundColor: props.statisticsBackgroundColor, 
    alignItems:"center", 
    justifyContent:"center",
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
   },
  payment: {
    height:60, 
    width:60, 
    borderRadius:30, 
    backgroundColor: props.paymentBackgroundColor, 
    alignItems:"center", 
    justifyContent:"center",
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },
  statusCar: {
    height:60, 
    width:60, 
    borderRadius:30, 
    backgroundColor: props.statusCarBackgroundColor, 
    alignItems:"center", 
    justifyContent:"center",
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },
  rating: {
    height:60, 
    width:60, 
    borderRadius:30, 
    backgroundColor: props.ratingBackgroundColor, 
    alignItems:"center", 
    justifyContent:"center",
    shadowColor: theme.palette.shadow.main,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,

    elevation: 1,
  },
}));

export default ProfileOptions;