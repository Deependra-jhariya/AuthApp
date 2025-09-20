import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const signUpWithEmail = async (email: string, password: string) => {
  return await auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithEmail = async (email: string, password: string) => {
  return await auth().signInWithEmailAndPassword(email, password);
};

export const signOutUser = async () => {
  return await auth().signOut();
};

export const listenToAuthChanges = (callback: (user: any) => void) => {
  return auth().onAuthStateChanged(callback);
};

// Google Login

GoogleSignin.configure({
  webClientId: '36190950400-c9soikbj332bt909pn4els2he7h4vf1k.apps.googleusercontent.com', // from Firebase project settings
});

export const googleLogin = async (): Promise<FirebaseAuthTypes.User> => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const userInfo = await GoogleSignin.signIn();

    const idToken = userInfo?.data?.idToken;
    if (!idToken) {
      throw new Error('Google sign-in failed: No idToken found');
    }

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const userCredential = await auth().signInWithCredential(googleCredential);

    return userCredential.user;
  } catch (error) {
    console.log('Google login error:', error);
    throw error;
  }
};