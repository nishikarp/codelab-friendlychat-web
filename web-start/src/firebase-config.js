/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyAJM6gYEokAdsxvd74InWBN3Q4gdgxRuTk",
  authDomain: "friendlychat-a1969.firebaseapp.com",
  projectId: "friendlychat-a1969",
  storageBucket: "friendlychat-a1969.appspot.com",
  messagingSenderId: "425062680881",
  appId: "1:425062680881:web:81e40a921cc7057e2a8810"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}