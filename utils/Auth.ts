import * as Google from "expo-google-app-auth";
import { default as firebase, FirebaseProvider } from "../firebase";

const GOOGLE_ANDROID_ID = "";
const GOOGLE_EXPO_ANDROID_ID =
  "572775057762-ads9q5h85gdpcg1stcmnnb5lcr84q8vv.apps.googleusercontent.com";
const GOOGLE_IOS_ID = "";
const GOOGLE_IOS_EXPO_ID =
  "572775057762-biflc39viler3mp6t1iheu34kqectuf2.apps.googleusercontent.com";

export const SignInGoogle = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: GOOGLE_EXPO_ANDROID_ID,
      iosClientId: GOOGLE_IOS_EXPO_ID,
      androidStandaloneAppClientId: GOOGLE_ANDROID_ID,
      iosStandaloneAppClientId: GOOGLE_IOS_ID,
      scopes: ["profile", "email"],
    });
    /* 
        When creating standalone app for build need to follow steps at
        * https://docs.expo.io/versions/latest/sdk/google/#deploying-to-a-standalone-app-on-android
        adding the configuration under standaloneAppClientId.
    */
    if (result.type === "success") {
      const googleCred = FirebaseProvider.auth.GoogleAuthProvider.credential(
        result.idToken
      );
      return FirebaseProvider.auth().signInWithCredential(googleCred);
    }
    throw result;
  } catch (error) {
    //TODO: Better Error Handling On Auth Result
    console.log({ error });
  }
};
export const logoutUserFn = () => 
{
  return firebase.auth().signOut();
} 