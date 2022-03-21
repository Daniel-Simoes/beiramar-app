import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import LinearGradient from "react-native-linear-gradient";
import {
  Avatar,
} from "components";

const DrawerHeader = () => {
  return (

    // <SafeAreaView></SafeAreaView>
    <LinearGradient colors={["#0A3C70", "#2F80ED"]}  style={{flex:1}}>
<SafeAreaView style={{flex:1}}>
      
      <View style={{ marginLeft:20, flex:0.2, flexDirection:"row",alignItems:"center"}}>
      <Avatar
          containerStyle={{
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
          picture={"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
          border={true}
        /> 

        <View style={{}}>
        <Text style={{marginLeft:10, color: "#FFF", fontWeight:"700"}}>Daniel Simões</Text>
        <Text style={{marginLeft:10, color: "#eee"}}>daniel.dt@hotmail.com</Text>
        </View>
      </View>







      <View style={{flex:1,marginLeft:20, marginTop:20}}>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
          <Icon name="sliders-h" size={24} color={"#FFF"} />
          <Text style={{marginLeft:10, color: "#eee", fontWeight:"700"}}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
          <Icon name="headset" size={24} color={"#FFF"} />
          <Text style={{marginLeft:10, color: "#EEE", fontWeight:"700"}}>Suporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
          <Icon name="cloud-sun-rain" size={24} color={"#FFF"} />
          <Text style={{marginLeft:10, color: "#EEE", fontWeight:"700"}}>Previsāo do Clima</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:1, width:"80%", backgroundColor:"#fff", marginVertical:20, opacity:0.3}}/>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
        <Image
          style={{height:17, width:30}}
          source={require('../../assets/logoWhite.png')} 
        />
          <Text style={{marginLeft:10, color: "#EEE", fontWeight:"700"}}>Sobre BeiraMar</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={{ flexDirection:"row", marginLeft:20, marginBottom:30}}>
        <Icon name="arrow-left" size={20} color={"#FFF"} />
        <View>
        <Text style={{marginLeft:10, color: "#EEE", fontWeight:"700"}}>Logout</Text>

<Text style={{marginLeft:10, color: "#EEE", fontSize:11}}>BeiraMar v1.0.0</Text>
        </View>
        
      </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient >
  );
}

export default DrawerHeader;