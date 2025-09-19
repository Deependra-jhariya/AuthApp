import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AppColors, AppImages } from '../../../themes';
import {
  ActivityLoader,
  AppButton,
  AppInput,
  AppText,
} from '../../../components/atoms/index';
import { useAppNavigation } from '../../../utils/navigationHelper';
import { loginUser } from '../../../redux/feature/Auth/AuthApi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { userLoadingSelector } from '../../../redux/feature/Auth/AuthSelector';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { navigateTo, replaceTo } = useAppNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(userLoadingSelector);

  const handleLogin = async () => {
    try {
      const response = await dispatch(loginUser({ email, password })).unwrap();
      console.log('Login repsonse', response);
      if (response?.uid) {
        replaceTo('HomeScreen');
        setEmail("")
        setPassword("")
      }
    } catch (error) {
      console.log('Login Failed', error);
    }
  };

  if (isLoading) {
    return <ActivityLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        <AppText text={'Login'} style={{ alignSelf: 'center' }} />
        <AppInput
          label="Email"
          value={email}
          placeholder="Enter you email."
          onChangeText={text => setEmail(text)}
        />
        <AppInput
          label="Password"
          value={password}
          placeholder="Enter you Password."
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <AppButton
          text={'Login'}
          style={styles.LoginBtn}
          onSubmit={handleLogin}
        />

        <TouchableOpacity
          onPress={() => {
            navigateTo('Signup');
          }}
        >
          <AppText text={'Create Account ? '} style={styles.createAccount} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  LoginBtn: {
    marginTop: 20,
  },
  createAccount: {
    alignSelf: 'center',
    color: AppColors.appColor,
    fontSize: 15,
    marginTop: 10,
  },
});
