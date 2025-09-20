import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppButton, AppText } from '../../../components/atoms';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { logoutUser } from '../../../redux/feature/Auth/AuthApi';
import { AppColors } from '../../../themes';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    await dispatch(logoutUser());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
      <AppText text={'Welcome To HomeScreen'} />
      <AppButton
        text={'Logout'}
        onSubmit={handleLogout}
        style={{ backgroundColor: AppColors.lightGreen }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
