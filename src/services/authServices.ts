import auth from '@react-native-firebase/auth';

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
