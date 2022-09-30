import React from "react";
import {ImageBackground, View, Image} from "react-native";
 import {makeStyles, useTheme, Button} from "components";
 import firebaseSetup from "../auth/setup.jsx";
 import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
 import { GoogleSignin } from '@react-native-google-signin/google-signin';

 import {useActions} from "../redux/actions";
 
const Login = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();

  const {auth} = firebaseSetup();

  const {GetCredentials} = useActions();

  const [userFacebookId, setFacebookUserId] =  React.useState("");
  const [userFacebookName, setFacebookUserName] =  React.useState("");
  const [userFacebookEmail, setFacebookUserEmail] =  React.useState("");

  const [userGoogleId, setGoogleUserId] =  React.useState("");
  const [userGoogleName, setGoogleUserName] =  React.useState("");
  const [userGoogleEmail, setGoogleUserEmail] =  React.useState("");

  const onAuthStateChanged = (user) => {
    if (user) {
      setFacebookUserId("");
      setFacebookUserName("");
      setFacebookUserEmail("");

      setGoogleUserId("");
      setGoogleUserName("");
      setGoogleUserEmail("");
    } else {
      setFacebookUserId("");
      setFacebookUserName("");
      setFacebookUserEmail("");

      setGoogleUserId("");
      setGoogleUserName("");
      setGoogleUserEmail("");
    }
  };



  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);

  async function onFacebookButtonPressSignOut() {
    await auth().signOut();
  };

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  async function onGoogleButtonPressSignOut() {
    await auth().signOut();
  };

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };



  const goToAppFromGoogle = async () => {
    const googleResponse = await onGoogleButtonPress();

    GetCredentials(googleResponse);
    navigation.navigate('Home')
  };

  const goToAppFromFacebook = async () => {
    const googleResponse = await onFacebookButtonPress();
    GetCredentials(googleResponse);
    navigation.navigate('Home')
  };

  return (  
    <View style={styles.container}>
      <ImageBackground 
        style={styles.background} 
        source={require('../assets/login.png')} 
        resizeMode="cover"
      >
        <View style={styles.logo}>
          <Image source={require('../assets/logoWhite.png')}/>
        </View>
      <View style={styles.content}>
        <View style={styles.buttonsContainer}>
          <Button 
            label={"Facebook"}
            containerStyles={styles.facebookContainerStyles}
            buttonStyles={styles.facebookButtonStyles}
            labelStyles={styles.facebookLabelStyles}
            onPress={goToAppFromFacebook}
            iconName={"facebook"}
            iconColor={theme.palette.primary.contrast}
          />
          <Button 
            label={"Google"}
            containerStyles={styles.googleContainerStyles}
            buttonStyles={styles.googleButtonStyles}
            labelStyles={styles.googleLabelStyles}
            onPress={goToAppFromGoogle}
            iconName={"google"}
            iconColor={theme.palette.badge.main}
          />
        </View>
      </View>
    </ImageBackground>
  </View>
)};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    alignItems:"center", 
    marginRight:15, 
    top:-100,
  },
  text: {
    color:"white", 
    fontWeight:"700", 
    marginLeft:5,
  },
  textTwo: {
    color:"#333", 
    fontWeight:"600", 
    marginLeft:5,
  },
  content: {
    width:"100%", 
    position:"absolute", 
    bottom:80, 
    alignItems:"center", 
    justifyContent:"center",
  },
  buttonsContainer: {
    height:"100%", 
    width:"85%", 
    backgroundColor:"rgba(255, 255, 255, 0.4)", 
    alignItems:"center", 
    justifyContent:"center", 
    borderRadius:12,
    marginVertical: 15,
    paddingVertical:10
  },
  facebookContainerStyles: {
    width:"100%",
    justifyContent:"center",
    alignItems: "center",
  },
  facebookLabelStyles: {
    color:"#fff",
    fontSize:16,
    fontWeight:"700"
  },
  facebookButtonStyles: {
    width:"70%", 
    backgroundColor: "#2F80ED",
    borderRadius: 30,
    paddingVertical:10,
    justifyContent:"center",
    alignItems:"center",
  },
  googleContainerStyles: {
    width:"100%",
    justifyContent:"center",
    alignItems: "center",
  },
  googleLabelStyles: {
    color:"#333",
    fontSize:16,
    fontWeight:"700"
  },
  googleButtonStyles: {
    width:"70%", 
    backgroundColor: "#FFF",
    borderRadius: 30,
    paddingVertical:10,
    justifyContent:"center",
    alignItems:"center",
  },
}));

export default Login;