import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { AppColors } from '../../../themes';
import { AppButton, AppInput, AppText } from '../../../components/atoms/index';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../../redux/feature/Auth/AuthApi';
import { AppDispatch } from '../../../redux/store';
import { useAppNavigation } from '../../../utils/navigationHelper';
import { loginStyle } from '../LoginScreen/LoginScreenStyle';
const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { navigateTo } = useAppNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const handleSignUp = async () => {
    try {
      const response = await dispatch(signupUser({ email, password })).unwrap();

      console.log('Sign up successfully');
    } catch (error:any) {
      console.log('Signup failed.sdf', error);
      Alert.alert(error)
    }
  };

  return (
    <View style={loginStyle.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={loginStyle.centerView}>
          <AppText text={'SignUp'} style={loginStyle.heading} />
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
            text={'Create Account'}
            style={loginStyle.LoginBtn}
            ButtonTextStyle={loginStyle.btntext}
            onSubmit={handleSignUp}
          />

          <TouchableOpacity
            onPress={() => {
              navigateTo('LoginScreen');
            }}
          >
            <AppText
              text={'Already an account ? login'}
              style={[loginStyle.createAccount, { paddingRight: 16 }]}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;
