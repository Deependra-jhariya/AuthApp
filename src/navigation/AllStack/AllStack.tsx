import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, Signup, SplashScreen } from '../../screen/Auth/index';
import { HomeScreen } from '../../screen/layout/index';

import auth from '@react-native-firebase/auth';
import {
  userLoadingSelector,
  userSelector,
} from '../../redux/feature/Auth/AuthSelector';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUser,
  logout,
  setLoading,
} from '../../redux/feature/Auth/AuthSlice';
import { ActivityLoader } from '../../components/atoms';

const Stack = createNativeStackNavigator();

const AllStack = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(userLoadingSelector);
  const user = useSelector(userSelector);


  useEffect(() => {
    dispatch(setLoading(true));

    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        dispatch(
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
          }),
        );
      } else {
        dispatch(logout());
      }
      dispatch(setLoading(false));
    });

    return unsubscribe;
  }, [dispatch]);
  

  if (isLoading) {
    return <ActivityLoader />;
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AllStack;

const styles = StyleSheet.create({});
