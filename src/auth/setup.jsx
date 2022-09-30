import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '1010318083476-a7nsujvds2gf24eefhcl8g3j4t8fnf8l.apps.googleusercontent.com',
});
// import database from "@react-native-firebase/database";
// import storage from "@react-native-firebase/storage";

// const firebaseConfig = {
//   apiKey:,
//   authDomain: ,
//   databaseURL: ,
//   projectId: ,
//   storageBucket: ,
//   MessageSenderId: ,
//   appId: ,
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default () => {
  return {firebase, auth};
}



