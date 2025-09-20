import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { AppFontFamily } from '../../../themes';
import {
  ActivityLoader,
  AppButton,
  AppInput,
  AppText,
} from '../../../components/atoms/index';
import { useAppNavigation } from '../../../utils/navigationHelper';
import {
  googleLoginUser,
  loginUser,
} from '../../../redux/feature/Auth/AuthApi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { userLoadingSelector } from '../../../redux/feature/Auth/AuthSelector';
import { loginStyle } from './LoginScreenStyle';

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
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log('Login Failed', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await dispatch(googleLoginUser()).unwrap();
      console.log('Google login success', response);
      if (response?.uid) {
        replaceTo('HomeScreen');
      }
    } catch (error: any) {
      console.log('Google login failed', error);
      Alert.alert(error);
    }
  };

  if (isLoading) {
    return <ActivityLoader />;
  }

  return (
    <View style={loginStyle.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={loginStyle.centerView}>
          <AppText text={'Login'} style={loginStyle.heading} />
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

          <AppText
            text={'Forget Password ?'}
            style={loginStyle.forgetPassword}
          />

          <AppButton
            text={'Login'}
            style={loginStyle.LoginBtn}
            ButtonTextStyle={loginStyle.btntext}
            onSubmit={handleLogin}
          />

          <TouchableOpacity
            onPress={() => {
              navigateTo('Signup');
            }}
          >
            <AppText
              text={'Create Account ? '}
              style={[loginStyle.createAccount, { alignSelf: 'center' }]}
            />
          </TouchableOpacity>
        </View>
        <View style={loginStyle.googleLoginView}>
          <AppButton
            text={'Login with google'}
            style={loginStyle.googleLoginBtn}
            ButtonTextStyle={loginStyle.googleLoginText}
            onSubmit={handleGoogleLogin}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
