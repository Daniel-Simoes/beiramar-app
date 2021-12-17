import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import {useSelector} from "react-redux";
import {useActions} from "../redux/actions";
import { makeStyles, useTheme, Header, Notification } from "components";

const Notifications = () => {
  const styles = useStyles();
  const theme = useTheme();

  const notification = useSelector((state) => state.notification.notifications);
  const numberUnreadNotifications = useSelector((state) => state.notification.numberUnreadNotifications);
  const {GetAllNotification} = useActions();
  React.useEffect(() => {
    GetAllNotification();
  }, []);
 
  const renderItem = ({item}) => {
    return (
      <>
        <Notification item={item} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        rightIcon={"search"}
        rightIconColor={theme.palette.icon.main}
        rightIconAction={() => alert("Search comming soon.")}
        label={"Notifications"}
        badge={true}
        badgeAmount={numberUnreadNotifications}
      />
      <FlatList
        data={notification}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1, 
    backgroundColor:theme.palette.primary.main,
  },
}));

export default Notifications;

