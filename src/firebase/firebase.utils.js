import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBh-GazZflnbOwo_S0na2tD_yDd3miqP-A",
    authDomain: "shepscustomdesigns-d6d63.firebaseapp.com",
    projectId: "shepscustomdesigns-d6d63",
    storageBucket: "shepscustomdesigns-d6d63.appspot.com",
    messagingSenderId: "747998973028",
    appId: "1:747998973028:web:c5368c9e29cea0aee96371",
    measurementId: "G-3NEWNTJG6R"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



