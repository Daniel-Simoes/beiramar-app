import React from "react";
import {View, Text, SafeAreaView, TextInput, Animated, TouchableOpacity, ScrollView, Image, ImageBackground} from "react-native";
import { makeStyles, useTheme, Bubble, Header } from "components";
import Icon from "react-native-vector-icons/FontAwesome";

const ChatDetail = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();


  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        leftIcon={"arrow-left"}
        leftIconAction={goBack}
        leftIconColor={theme.palette.icon.main}
        label={"Daniel Simões"}
      />
      


      <ScrollView>
      <Bubble children={<Text>kfdsfhlskdjhflskadjhflaksjdhflaskdjhflaskdjhflaskdjfhlksdjhflskdjhjhsfjsd;lfkjs;ldkfjs;lkdjfs
        lkj</Text>}/>
        <Bubble children={<Text>kfdsfhlskdjhflskadjhflaksjdhflaskdjhflaskdjhflaskdjfhlksdjhflskdjhjhsfjsd;lfkjs;ldkfjs;lkdjfs
        lkj</Text>}/>
        <Bubble position = "right" children={<Text>kfdsfhlskdjhflskadjhflaksjdhflaskdjhflaskdjhflaskdjfhlksdjhflskdjhjhsfjsd;lfkjs;ldkfjs;lkdjfs
        lkj</Text>}/>
        <Bubble children={<Text>kfdsfhlskdjhflskadjhflaksjdhflaskdjhflaskdjhflaskdjfhlksdjhflskdjhjhsfjsd;lfkjs;ldkfjs;lkdjfs
        lkj</Text>}/>
        <Bubble position = "right" children={<Text>kfdsfhlskdjhflskadjhflaksjdhflaskdjhflaskdjhflaskdjfhlksdjhflskdjhjhsfjsd;lfkjs;ldkfjs;lkdjfs
        lkj</Text>}/>

                
      </ScrollView>
      
 
        <View style={styles.inputWrapper}>
              <TextInput
                style={{     
                      
                  backgroundColor:"#fff",
                  flex:1,
                  borderRadius:8,
                  minHeight:40,
                  padding:10
                  
                }}
                placeholder="digite"
                multiline={true}
                scrollEnabled={true}

              />

              
                <TouchableOpacity
                  style={styles.sendButton}
                  activeOpacity={0.7}
                  >
                  <Icon
                    name="send"
                    size={14}
                    color={theme.palette.primary.contrast}
                  />
                </TouchableOpacity>
             

            </View>
           

    </SafeAreaView>    
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    backgroundColor:theme.palette.primary.main,
  },
  inputWrapper: {
    position:"absolute",
    flexDirection:"row",
    bottom:20,
    paddingHorizontal: 20,
    justifyContent:"center",
    alignItems:"center",
    maxHeight:150, 


  },
  sendButton: {
    marginLeft: 10,
    padding: 8,
    marginVertical: 3,
    backgroundColor: "#2F80ED",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent:"center",
    alignItems:"center",
  },
}));

export default ChatDetail;
