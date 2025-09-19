import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppButton } from '../../../components/atoms';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { logoutUser } from '../../../redux/feature/Auth/AuthApi';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    await dispatch(logoutUser());
  };

  return (
    <View style={{flex:1,justifyContent:"center" ,alignSelf:"center"}}>
      <Text> Welcome to HomeScreen</Text>
      <AppButton text={'Logout'} onSubmit={handleLogout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
