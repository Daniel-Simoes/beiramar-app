import React from "react";
import { SafeAreaView, FlatList} from "react-native";
import {useSelector} from "react-redux";
import {useActions} from "../redux/actions";
import { Header, ChatListEntry} from "components";
import { makeStyles, useTheme } from "components";

const Chat = () => {
  const styles = useStyles();
  const theme = useTheme();

  const trip = useSelector((state) => state.trip);
  const {GetAllTrip} = useActions();

  React.useEffect(() => {
    GetAllTrip();
  }, []);

  const renderItem = () => {
    return (
      <>
        <ChatListEntry
          image={"https://placeimg.com/640/480/nature"}
          name={"Daniel Simōes"}
          date={"12/09/2021"}
          lastMessage={"An suas viderer pro. Vis cu magna altera, ex vivendo atomorum."}
          unreaded={true}
        />
      </>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        rightIcon={"search"}
        rightIconColor={theme.palette.icon.main}
        rightIconAction={() => alert("Search comming soon.")}
        label={"Chats"}
        badge={true}
        badgeAmount={3}
      />
      <FlatList
        data={trip}
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

export default Chat;

